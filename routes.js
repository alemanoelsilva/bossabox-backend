'use strict';

const {
  getAllTools,
  createTool,
  deleteTool,
} = require('./api/tools/factory');

const {
  getRequestToolsSchema,
  getResponseToolsSchema,
  postRequestToolsSchema,
  postResponseToolsSchema,
  deleteRequestToolsSchema,
  deleteResponseToolsSchema,
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
    requestValidation({ schema: postRequestToolsSchema, requestType: 'body' }),
    createTool,
    responseValidation({ schema: postResponseToolsSchema }),
  );

  app.delete('/api/tools/:id',
    requestValidation({ schema: deleteRequestToolsSchema, requestType: 'params' }),
    deleteTool,
    responseValidation({ schema: deleteResponseToolsSchema }),
  );
};
