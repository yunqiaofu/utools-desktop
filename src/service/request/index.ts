import MinRequest from "./request";
const minRequest = new MinRequest();

// 请求拦截器
minRequest.interceptors.request((request:any) => {
  request.header.token = uni.getStorageSync("MINI_PROGRAM_ACCESS_TOKEN") || uni.getStorageSync('MINI_PROGRAM_WX_CODE') || uni.getStorageSync('JW_ACCESS_TOKEN');
  request.header.userId = uni.getStorageSync('MINI_PROGRAM_USER_ID');
  console.log(request)
  return request;
});

// 响应拦截器
minRequest.interceptors.response((response:any) => {
  console.log(
    "🐛response🐛",
    response
  );
  if (response.statusCode === 401) {
    uni.removeStorageSync("MINI_PROGRAM_IS_LOGIN");
    uni.removeStorageSync("MINI_PROGRAM_USER");
    uni.showToast({
      icon: "none",
      title: "登录失效,请重新登录",
    });
    uni.reLaunch({
      url: '/pages/home/home',
    })
    return response.data;
  } else if (response.data && response.data.code === 527) {
    uni.showModal({
      title: '提示',
      showCancel: false,
      content: response.data.msg,
      success: function () {
        uni.clearStorage()
        uni.clearStorageSync()
        uni.reLaunch({
          url: '/pages/home/home',
        })
      }
    });
  } else if (response.data && response.data.code !== 0) {
    if (response.data.msg) {
      uni.showToast({
        icon: "none",
        title: response.data.msg,
      });
    }
    return response.data;
  } else {
    return response.data;
  }
});
export default minRequest
