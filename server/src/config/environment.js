const envConfig = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  WP_CONFIG: process.env.WP_CONFIG
};

module.exports = envConfig;
