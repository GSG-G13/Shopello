import Sequelize from 'sequelize';
import pg from 'pg';
import {} from 'dotenv/config';

pg.defaults.ssl = true;

const config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
};

const connection = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    port: config.port,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
);

export default connection;
