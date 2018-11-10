'use strict';

const { get } = require('../helpers');

const GITHUB_URL = '/api/users';

const query = {
  since: '0'
};

describe('Get All Users Integration Test', () => {
  describe('Get users with success', () => {
    test('Get first page of users', async () => {
      const { body, statusCode } = await get({ url: GITHUB_URL, query });

      expect(statusCode).toEqual(200);
      expect(body.users.length).toEqual(30);
      expect(body.nextPage).toEqual(46);

      query.since = body.nextPage;
    });
    test('Get second page of users', async () => {
      const { body, statusCode } = await get({ url: GITHUB_URL, query });

      expect(statusCode).toEqual(200);
      expect(body.users.length).toEqual(30);
      expect(body.nextPage).toEqual(91);
    });
  });
});
