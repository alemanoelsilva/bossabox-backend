'use strict';

const { getAllUsers, getUserByUsername, getRepositories } = require('../../api/users/adapter');

describe('Adapter Unit tests', () => {
  const mocks = {
    query: '',
    params: '',
    services: {
      getUsers: jest.fn(() => ({ data: {}, headers: { link: '' } })),
      getUser: jest.fn(() => ({ data: {} })),
      getRepositoriesByUser: jest.fn(() => ({ data: {} }))
    },
    extractNumberOfString: jest.fn(),
    onSuccess: jest.fn(),
    onError: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  describe('Get all users', () => {
    test('Should call the onSuccess Function with success', async () => {
      await getAllUsers(mocks);

      expect(mocks.services.getUsers).toHaveBeenCalledTimes(1);
      expect(mocks.extractNumberOfString).toHaveBeenCalledTimes(1);
      expect(mocks.onSuccess).toHaveBeenCalledTimes(1);
      expect(mocks.onError).toHaveBeenCalledTimes(0);
    });

    test('Should return error when GetAllUsers Function was called', async () => {
      await getAllUsers({
        ...mocks,
        services: {
          getUsers: () => { throw new Error('Error GetAllUsers') }
        }
      });

      expect(mocks.extractNumberOfString).toHaveBeenCalledTimes(0);
      expect(mocks.onSuccess).toHaveBeenCalledTimes(0);
      expect(mocks.onError).toHaveBeenCalledTimes(1);
    });

    test('Should return error when extractNumberOfString Function was called', async () => {
      await getAllUsers({
        ...mocks,
        extractNumberOfString: () => { throw new Error('Error ExtractNumberOfString') }
      });

      expect(mocks.services.getUsers).toHaveBeenCalledTimes(1);
      expect(mocks.onSuccess).toHaveBeenCalledTimes(0);
      expect(mocks.onError).toHaveBeenCalledTimes(1);
    });
  });

  describe('Get one user by username', () => {
    test('Should call the onSuccess Function with success', async () => {
      await getUserByUsername(mocks);

      expect(mocks.services.getUser).toHaveBeenCalledTimes(1);
      expect(mocks.onSuccess).toHaveBeenCalledTimes(1);
      expect(mocks.onError).toHaveBeenCalledTimes(0);
    });

    test('Should return error when GetUser Function was called', async () => {
      await getUserByUsername({
        ...mocks,
        services: {
          getUser: () => { throw new Error('Error GetUser') }
        }
      });

      expect(mocks.onSuccess).toHaveBeenCalledTimes(0);
      expect(mocks.onError).toHaveBeenCalledTimes(1);
    });
  });

  describe('Get repositories by username', () => {
    test('Should call the onSuccess Function with success', async () => {
      await getRepositories(mocks);

      expect(mocks.services.getRepositoriesByUser).toHaveBeenCalledTimes(1);
      expect(mocks.onSuccess).toHaveBeenCalledTimes(1);
      expect(mocks.onError).toHaveBeenCalledTimes(0);
    });

    test('Should return error when GetRepositoriesByUser Function was called', async () => {
      await getRepositories({
        ...mocks,
        services: {
          getRepositoriesByUser: () => { throw new Error('Error GetRepositoriesByUser') }
        }
      });

      expect(mocks.onSuccess).toHaveBeenCalledTimes(0);
      expect(mocks.onError).toHaveBeenCalledTimes(1);
    });
  });
});
