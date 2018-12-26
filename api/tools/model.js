'use strict';

const Sequelize = require('sequelize');
const { getConnection } = require('../../config/sequelize');

const Tools = getConnection().define('tool', {
  id: {
    type: Sequelize.UUID,
    field: '_id',
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  tableName: 'tool',
  timestamps: false
});

Tools.sync({ force: true });

module.exports = Tools;
