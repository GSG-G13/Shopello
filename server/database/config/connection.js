import pg from 'pg';
import {} from 'dotenv/config';

const { Pool } = pg;

const connection = new Pool({
  connectionString: process.env.DEV_DB_URL,
  ssl: false,
});

export default connection;
