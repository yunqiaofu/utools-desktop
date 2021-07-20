
import store from '@/vuex/store';
import api from '@/service/api';
import config from '@/service/config';
import cmappClass from '@/plugins/cmapp.class';
import uniAjax from '@/plugins/uniAjax';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// const commonConfig = require('@/app.config.js')
// const vk = require('@/uni_modules/vk-unicloud/uniCloud/cloudfunctions/common/vk-unicloud/index.js')
const plugins: any = {};

  // const vks = vk.init({
  //   Vue,               // Vue实例
  //   // commonConfig,	           // 配置
  // });
plugins.install = function (Vue: any) {
  // Vue.use(vk);
  // 初始化 vk框架

  // console.log('🐛 ~ file: index.ts ~ line 17 ~ vk', uni, vk)
  // Vue.prototype.$xk = vks;
  Vue.prototype.$store = store;
  Vue.prototype.$api = api;
  Vue.prototype.$config = config;
  Vue.prototype.$cmapp = new cmappClass();
  Vue.prototype.$uniAjax = uniAjax;
}

export default plugins;
