import pg from 'pg';
import {} from 'dotenv/config';

const { Pool } = pg;

const connection = new Pool({
  connectionString: process.env.DEV_DB_URL,
  ssl: true,
});

connection.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('connected to the db');
}).on('error', (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
});

export default connection;
