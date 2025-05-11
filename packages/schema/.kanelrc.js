const { knexTypeFilter, generateKnexTablesModule } = require('kanel-knex');
const { generateIndexFile } = require('kanel');

const knexConfig = require('./knexfile');
const outputPath = './src/models';

/** @type {import('kanel').config} */

module.exports = {
  connection: knexConfig.development.connection,

  outputPath,
  preDeleteOutputFolder: true,

  typeFilter: knexTypeFilter,
  preRenderHooks: [generateIndexFile, generateKnexTablesModule],
  customTypeMap: {
    'public.citext': 'string',
  },
};
