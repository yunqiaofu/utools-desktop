import envType from '@/builds/envType';
import selfConfig from '@/builds/selfConfig';

import setFileObject from '@/plugins/lib/setFileObject';
const fileList = require.context(
  '@/service/config',
  true,
  /.ts$/,
);
const otherConf = setFileObject(fileList, {});

export default {
  name: '华通云',
  description: '模版',
  site: 'aiplat.com',
  github: 'github.com/aiplat',
  version: new Date().valueOf(),
  project: selfConfig,
  platform: process.env.VUE_APP_PLATFORM,
  envType: envType,
  screenWidth: 750,
  ...otherConf,
};
