'use strict';

const { get } = require('../helpers');

const GITHUB_URL = '/api/users';
const USERNAME = 'alemanoelsilva';

const query = {
  page: 1,
  perPage: 3
};

describe('Get All Repositories by Username Integration Test', () => {
  describe('Get Repositories by Username pagined with success', () => {
    test('Get 3 repositories by page - first page', async () => {
      const { body, statusCode } = await get({
        url: `${GITHUB_URL}/${USERNAME}/repos`,
        query
      });

      expect(statusCode).toEqual(200);
      expect(body.length).toEqual(3);

      expect(body[0].name).toEqual('alemanoelsilva.github.io');
      expect(body[1].name).toEqual('aluraAngular2');
      expect(body[2].name).toEqual('aluraframe');
    });

    test('Get 3 repositories by page - second page', async () => {
      const { body, statusCode } = await get({
        url: `${GITHUB_URL}/${USERNAME}/repos`,
        query: { ...query, page: 2 }
      });

      expect(statusCode).toEqual(200);
      expect(body.length).toEqual(3);

      expect(body[0].name).toEqual('appwebfieoic');
      expect(body[1].name).toEqual('atena');
      expect(body[2].name).toEqual('blog');
    });
  });

  describe('Get Repositories by Username with success', () => {
    test('Get all repositories', async () => {
      const { body, statusCode } = await get({ url: `${GITHUB_URL}/${USERNAME}/repos` });

      expect(statusCode).toEqual(200);
      expect(body.length).toEqual(39);
    });
  });
});
