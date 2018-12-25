'use strict';

const moment = require('moment');

const logger = require('../../config/logger');

const adapter = require('./adapter');
const model = require('./model');
const repository = require('./repository')(model);

const { formatterResponseTools } = require('./formatters');

const onError = require('../helpers/handler-error');
const onSuccess = require('../helpers/handler-success');

const formatDate = 'MMMM Do YYYY, h:mm:ss a';

module.exports = ({
  getAllTools: (request, response) => adapter.getAllTools({
    params: request.query.tag ? { tag: request.query.tag } : { },
    repository: {
      getAll: repository.getAll
    },
    formatters: {
      response: formatterResponseTools({ moment, formatDate })
    },
    logger,
    onSuccess: onSuccess(response),
    onError: onError(response)
  }),

  createTool: (request, response) => adapter.createTool({
    payload: request.body,
    repository: {
      save: repository.save
    },
    logger,
    onSuccess: onSuccess(response),
    onError: onError(response)
  }),

  deleteTool: (request, response) => adapter.deleteTool({
    params: {
      id: request.params.id
    },
    repository: {
      delete: repository.delete
    },
    logger,
    onSuccess: onSuccess(response),
    onError: onError(response)
  })
});
