const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

pool.connect((err) => {
  if (err) console.log('err on pool.connect', err);
  pool.query(`CREATE TABLE IF NOT EXISTS "user" (
    _id serial primary key,
    user_id varchar(255),
    username varchar(255),
    role varchar(255),
    email varchar(255),
    created_at date
  )`, (error, result) => {
    if (error) console.log('create table error', error);
    else console.log('create table result', result);
  });
});

module.exports = pool;

