'use strict';

const { connect } = require('./config/sequelize');
const logger = require('./api/helpers/logger');

const app = require('./app');
const { app: { port }, db: { database, user, pass, logging } } = require('./config/environment');

const init = async () => {
  const response = await connect({ database, user, pass, logging });

  if (!response) return null;

  app().listen(port, () => {
    logger.info(`Application is running on port ${port}`);
  })
};

init();
