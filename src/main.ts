import Vue from 'vue';
import App from '@/App.vue';
import plugins from '@/plugins/index';
// const vk = require('@/uni_modules/vk-unicloud/uniCloud/cloudfunctions/common/vk-unicloud/index.js');
// const commonConfig = require('@/app.config.js')
Vue.config.productionTip = false;
// Vue.use(vk);
Vue.use(plugins);
// console.log('🐛 ~ file: main.ts ~ line 9 ~ vk', vk)
// vk.init({
// 	Vue, commonConfig
// });
new App().$mount();
