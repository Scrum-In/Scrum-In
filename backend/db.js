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
    created_at date default CURRENT_TIMESTAMP
  )`, (error, result) => {
    if (error) console.log('create table error', error);
    else console.log('create table result', result);
  });
  pool.query(`CREATE TABLE IF NOT EXISTS "user_tasks" (
    user_id integer,
    task_id integer
  )`, (error, result) => {
    if (error) console.log('create user_task table error', error);
    else console.log('create user_task table result', result);
  });
  pool.query(`CREATE TABLE IF NOT EXISTS "task" (
    _id serial primary key,
    title varchar(255),
    body varchar(255),
    status varchar(255),
    owner_id integer,
    created_at date default CURRENT_TIMESTAMP
  )`, (error, result) => {
    if (error) console.log('create task table error', error);
    else console.log('create task table result', result);
  });
});

module.exports = pool;

