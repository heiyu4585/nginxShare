'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544352967470_5123';

  // add your config here
  config.middleware = [];

  // 设置静态文件目录
  config.static = {
    prefix: '',
    dir: path.join(appInfo.baseDir, './public'),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: false
  };

  //传递CSRF token
  config.security = {
    domainWhiteList: [],
    csrf: {
      enable: false,
      queryName: '_csrf',
      bodyName: '_csrf',
      ignoreJSON: true
    }
  }
  return config;
};
