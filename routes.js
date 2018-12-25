'use strict';

const {
  getAllTools,
  createTool,
  deleteTool,
} = require('./api/tools/factory');

const {
  getRequestToolsSchema,
  getResponseToolsSchema,
  postRequestToolSchema,
  postResponseToolSchema,
  deleteRequestToolSchema,
  deleteResponseToolSchema,
} = require('./api/tools/schemas');

const {
  requestValidation,
  responseValidation,
} = require('./api/helpers/schema-validation');

module.exports = (app) => {
  app.get('/api/tools',
    requestValidation({ schema: getRequestToolsSchema, requestType: 'query' }),
    getAllTools,
    responseValidation({ schema: getResponseToolsSchema }),
  );

  app.post('/api/tools',
    requestValidation({ schema: postRequestToolSchema, requestType: 'body' }),
    createTool,
    responseValidation({ schema: postResponseToolSchema }),
  );

  app.delete('/api/tools/:id',
    requestValidation({ schema: deleteRequestToolSchema, requestType: 'params' }),
    deleteTool,
    responseValidation({ schema: deleteResponseToolSchema }),
  );
};
