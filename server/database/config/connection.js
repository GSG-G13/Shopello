import Sequelize from 'sequelize';
import {} from 'dotenv/config';

const connection = new Sequelize(
  process.env.DEV_DB_URL,
  {
    // ssl: true,
    dialect: 'postgres',
    logging: false,
  },
);

export default connection;
