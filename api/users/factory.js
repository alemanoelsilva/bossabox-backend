'use strict';

const { services: { github } } = require('../../config/environment');
const axios = require('axios');

const adapter = require('./adapter');
const service = require('./service')(axios, github.endpoint);

const { extractNumberOfString } = require('../helpers/handler-get-number');
const onError = require('../helpers/handler-error');
const onSuccess = require('../helpers/handler-success');

module.exports = ({
  getAllUsers: (request, response) => adapter.getAllUsers({
    query: {
      since: !request.query.since ? '' : request.query.since.toString(),
    },
    services: {
      getUsers: service.getUsers
    },
    extractNumberOfString,
    onSuccess: onSuccess(response),
    onError: onError(response)
  }),

  getUserByUsername: (request, response) => adapter.getUserByUsername({
    params: {
      username: request.params.username
    },
    services: {
      getUser: service.getUser
    },
    onSuccess: onSuccess(response),
    onError: onError(response)
  }),

  getRepositories: (request, response) => adapter.getRepositories({
    params: {
      username: request.params.username
    },
    query: {
      page: parseInt(request.query.page, 10),
      perPage: parseInt(request.query.perPage, 10),
    },
    services: {
      getRepositoriesByUser: service.getRepositoriesByUser
    },
    onSuccess: onSuccess(response),
    onError: onError(response)
  })
});
