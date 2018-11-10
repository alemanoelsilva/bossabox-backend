'use strict';

exports.extractNumberOfString = string =>
  parseInt(string.match(/\d/g).join(''), 10);
