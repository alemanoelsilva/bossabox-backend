'use strict';

const { get } = require('../helpers');

const GITHUB_URL = '/api/users';
const USERNAME = 'alemanoelsilva';

describe('Get One User by Username Integration Test', () => {
  describe('Get One User by Username with success', () => {
    test('Get one user', async () => {
      const { body, statusCode } = await get({ url: `${GITHUB_URL}/${USERNAME}/details` });
      expect(statusCode).toEqual(200);
      expect(body.login).toEqual(USERNAME);
    });
  });
});
