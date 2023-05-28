const pg = require('pg');
require('dotenv/config');

const { Pool } = pg;

const connection = new Pool({
  connectionString: process.env.DEV_DB_URL,
  ssl: false,
});

module.exports = connection;
