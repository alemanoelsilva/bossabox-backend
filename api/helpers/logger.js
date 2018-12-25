'use strict';

const bunyan = require('bunyan');

const { logger: { level } } = require('../../config/environment')

module.exports = bunyan.createLogger({
  name: 'bossabox',
  stream: process.stdout,
  level
});
