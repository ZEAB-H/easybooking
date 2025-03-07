const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'postgres',
      database: 'easybooking',
      charset: 'utf8',
    },
    migrations: {
      directory: path.resolve(__dirname, 'migrations'),
    },
  },
};
