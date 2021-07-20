import setFileObject from '@/plugins/lib/setFileObject';
import envType from '@/builds/envType';
import selfConfig from '@/builds/selfConfig';
import minRequest from '@/service/request/index';
// $uniAjax.http
const fileList = require.context(
  '@/service/apis',
  true,
  /.ts$/,
);

const config: any = selfConfig;
const apiAll: any = setFileObject(fileList, {});
console.log('🐛 ~ file: api.ts ~ line 14 ~ apiAll', apiAll)

// 接口域名
let server: string = 'https://lajw.watone.com.cn/apitest/no-auth';
if (config && config.server && config.server[envType]) {
  server = config.server[envType];
}
// 设置默认配置
minRequest.setConfig((config: any) => {
  config.baseURL = server
  return config;
});
for (const apis in apiAll) {
  for (const api in apiAll[apis]) {
    let newUrl = apiAll[apis][api]
    if (newUrl.toString().indexOf(':') !== -1) {
      let method: any = newUrl.split(':')[0]
      let URL: String = newUrl.split(':')[1]
      switch (method) {
        case 'get':
          apiAll[api] = (data: any, key: any) => { return minRequest.get(key ? URL + key : URL, data) }
          break;
        case 'post':
          apiAll[api] = (data: any, key: any) => { return minRequest.post(key ? URL + key : URL, data) }
          break;
        case 'put':
          apiAll[api] = (data: any, key: any) => { return minRequest.put(key ? URL + key : URL, data) }
          break;
        case 'del':
          apiAll[api] = (data: any, key: any) => { return minRequest.del(key ? URL + key : URL, data) }
          break;
        default:
          break;
      }
    } else {
      apiAll[api] = (data: any, key: any) => { return minRequest.get(key ? URL + key : URL, data) }
    }
  }
}
console.log('1111', apiAll)
const api: any = {
  server: server,
  ...apiAll,
};

export default api;
