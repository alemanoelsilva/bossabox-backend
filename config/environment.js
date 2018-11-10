'use strict';

require('dotenv').load();

const ENVIRONMENT = {
  TEST: 'test',
  DEV: 'development',
  PROD: 'production'
};

const env = process.env.NODE_ENV || ENVIRONMENT.DEV;

module.exports = {
  env,
  app: {
    port: process.env.PORT
  },
  services: {
    github: {
      endpoint: process.env.GITHUB_URL,
    }
  }
};
