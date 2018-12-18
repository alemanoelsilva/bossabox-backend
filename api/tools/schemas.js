'use strict';

const Joi = require('joi');

exports.getRequestToolsSchema = Joi.object({
  tag: Joi.string().min(2).max(80).optional()
});

exports.getResponseToolsSchema = Joi.object({
  cards: Joi.array().items(Joi.object({
    id: Joi.string().guid().required(),
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    createdAt: Joi.string().required(),
  })),
});

exports.postRequestToolsSchema = Joi.object({
  title: Joi.string().required(),
  link: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

exports.postResponseToolsSchema = Joi.object({
  tools: Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    createdAt: Joi.string().required(),
  }),
});

exports.deleteRequestToolsSchema = Joi.object({
  id: Joi.string().guid().required(),
});

exports.deleteResponseToolsSchema = Joi.object({
  message: Joi.string().required(),
});
