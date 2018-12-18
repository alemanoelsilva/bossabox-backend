'use strict';

const sequelizeDB = require('../config/sequelize');
const { db: { database, user, pass }, env } = require('../config/environment');

let model = '';

async function clean() {
  await model.destroy({ where: {} });
}

// Don't update _id's values
async function seed() {
  await Promise.all([
    model.bulkCreate([
      {
        id: '1893d9b7-701d-4415-908a-fb30f97f5bb1',
        title: 'Notion',
        link: 'https://notion.so',
        description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
        tags: [
          'organization',
          'planning',
          'collaboration',
          'writing',
          'calendar'
        ]
      },
      {
        id: '1893d9b7-701d-4415-908a-fb30f97f5bb2',
        title: 'json-server',
        link: 'https://github.com/typicode/json-server',
        description: 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
        tags: [
          'api',
          'json',
          'schema',
          'node',
          'github',
          'rest'
        ]
      },
      {
        id: '1893d9b7-701d-4415-908a-fb30f97f5bb3',
        title: 'fastify',
        link: 'https://www.fastify.io/',
        description: 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
        tags: [
          'web',
          'framework',
          'node',
          'http2',
          'https',
          'localhost'
        ]
      }
    ]),
  ]);
}

async function connect() {
  await sequelizeDB.connect({ database, user, pass });
  model = require('../api/tools/model');

  console.log(`Database connected ${database}`);
}

async function disconnect() {
  await sequelizeDB.disconnect();
}

async function check() {
  if (env === 'development') {
    await connect();

    const { count } = await model.findAndCountAll({ page: 1, limit: 10 });

    if (!count) {
      await clean();
      await seed();
    }

    await disconnect();
    return 'Database populated';
  }

  return 'Environment is not DEV';
}

(async () => {
  const result = await check();
  console.log(result);
})();
