'use strict';

const moment = require('moment');

const adapter = require('./adapter');
const model = require('./model');
const repository = require('./repository')(model);
const { formatterResponseTools } = require('./formatters')

const onError = require('../helpers/handler-error');
const onSuccess = require('../helpers/handler-success');

module.exports = ({
  getAllTools: (request, response) => adapter.getAllTools({
    params: {
      tag: request.query.tag || null
    },
    repository: {
      getAll: repository.getAll
    },
    formatters: {
      response: formatterResponseTools(moment)
    },
    onSuccess: onSuccess(response),
    onError: onError(response)
  }),

  createTool: (request, response) => adapter.createTool({
    payload: request.body,
    repository: {
      save: repository.save
    },
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
    onSuccess: onSuccess(response),
    onError: onError(response)
  })
});
