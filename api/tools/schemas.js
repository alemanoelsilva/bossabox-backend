'use strict';

const Joi = require('joi');

exports.getRequestToolsSchema = Joi.object({
  tag: Joi.string().min(2).max(80).optional()
});

exports.getResponseToolsSchema = Joi.object({
  tools: Joi.array().items(Joi.object({
    id: Joi.string().guid().required(),
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    createdAt: Joi.string().required(),
  })).required(),
  count: Joi.number().required(),
});

exports.postRequestToolSchema = Joi.object({
  title: Joi.string().required(),
  link: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

exports.postResponseToolSchema = Joi.object({
  tool: Joi.object({
    id: Joi.string().guid().required(),
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    createdAt: Joi.string().required(),
  }).required(),
});

exports.deleteRequestToolSchema = Joi.object({
  id: Joi.string().guid().required(),
});

exports.deleteResponseToolSchema = Joi.object({
  message: Joi.string().required(),
});
