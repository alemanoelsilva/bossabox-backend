'use strict';

const Joi = require('joi');

exports.requestValidation = ({ schema, requestType }) => (request, response, next) => {
  const { error, value } = Joi.validate(request[requestType], schema);
  if (error) return next(error);

  request[requestType] = value;

  return next();
};

exports.responseValidation = schema => (request, response, next) => {
  const { error } = Joi.validate(response.data, schema);
  if (error) return next(error);

  return response
    .status(response.statusCode || 200)
    .json({ data: response.data, error: null })
    .end();
};
