'use strict'

const app = require('./app');
const { app: { port } } = require('./config/environment');

const init = async () => {
  app().listen(port, () => {
    console.log(`Application is running on port ${port}`);
  })
};

init();
