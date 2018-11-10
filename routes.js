'use strict';

const { getAllUsers, getUserByUsername, getRepositories } = require('./api/users/factory');

module.exports = (app) => {
  app.get('/api/users', getAllUsers);
  app.get('/api/users/:username/details', getUserByUsername);
  app.get('/api/users/:username/repos', getRepositories);
};
