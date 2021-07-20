/*
 * @Author: xkloveme
 * @Date: 2021-06-16 15:01:39
 * @LastEditTime: 2021-07-19 17:43:22
 * @LastEditors: xkloveme
 * @Description: 配置主入口
 * @FilePath: /utools-desktop/src/projects/aiplat/selfConfig.ts
 * @Copyright © xkloveme
 */

export default {
  name: '桌面云',
  type: 'xkloveme',
  version: '1.1.1',
  logo: 'static/logo.png',
  site: 'www.jixiaokang.com',
  url: 'https://lajw.watone.com.cn/apitest/no-auth',
  description: '桌面云',
  copyright: '©2021',
  email: 'xkloveme@qq.com',
  "devServer" : {
    "https" : false,
    "port" : 2017,
    "proxy" : {
        "/api" : {
            // "target": "http://192.168.31.92:9527",
            "target" : "http://172.18.19.217:33000/api", // 测试环境
            "changeOrigin" : true,
            "secure" : false,
            "pathRewrite" : {
                "^/api" : ""
            }
        }
    }
},
  server: {
    uat: 'https://lajw.watone.com.cn/api/no-auth', // 测试环境接口域名
    ver: 'https://lajw.watone.com.cn/apitest/no-auth', // 预生产环境接口域名
    pro: 'https://lajw.watone.com.cn/apitest/no-auth', // 生产环境接口域名
  },
};
