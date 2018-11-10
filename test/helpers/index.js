'use strict'

const supertest = require('supertest');

const app = require('../../app')();

exports.get = async ({ url, query = '' }) => supertest(app).get(url).query(query)
