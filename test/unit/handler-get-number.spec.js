'use strict';

const { extractNumberOfString } = require('../../api/helpers/handler-get-number');

describe('Handler Error Unit tests', () => {
  const string = '<https://api.github.com/users?since=50>';

  describe('Handler String', () => {
    test('Should extract the number (50) of string', async () => {
      const number = extractNumberOfString(string);

      expect(number).toEqual(50);
    });
  });
});
