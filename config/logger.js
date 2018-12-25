'use strict';

const bunyan = require('bunyan');

const { logger: { level } } = require('./environment')

module.exports = bunyan.createLogger({
  name: 'bossabox',
  stream: process.stdout,
  level
});
