'use strict';

const handlerSuccess = require('../../api/helpers/handler-success');

describe('Handler Success Unit tests', () => {
  const response = {
    status: jest.fn(() => ({
      json: jest.fn()
    }))
  };

  describe('Handler Success', () => {
    test('Should execute response function', async () => {
      handlerSuccess(response)({});

      expect(response.status).toBeCalled;
      expect(response.status().json).toBeCalled;
    });
  });
});
