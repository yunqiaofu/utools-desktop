/**
 * 接口规范
 * 1.支持直接写,默认为get请求
 * getUserId: '/test',
 * 2.支持前面加:
 * 可共支持 post get put del
 *  get: 'del:/system/QlxcDwgl/getTownStreetList',
 * 3.接口调用尽量写在apis文件夹下,嵌套文件夹支持最后一个文件
 * 全部接口会被拎出来放在$api下,可以直接调用
 * 4.支持第二个参数拼接Url
 * 
 *
 */
export default {
  getUserId: '/test',
  saveUserInfo: '/test',
  del:'del:/system/QlxcDwgl/getTownStreetList/',
};
