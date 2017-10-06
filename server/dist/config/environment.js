'use strict';

var envConfig = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  WP_CONFIG: process.env.WP_CONFIG
};

module.exports = envConfig;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(envConfig, 'envConfig', 'server/src/config/environment.js');
}();

;