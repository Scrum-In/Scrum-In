const { Pool, Client } = require('pg');

const connectionString = 'postgresql://uie7yrjb4un1tizgbjrf:vR4ECWHMGYzUad4bxZRL@bepuymtvwz5koje-postgresql.services.clever-cloud.com:5432/bepuymtvwz5koje';

const pool = new Pool({
  connectionString,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

const client = new Client({
  connectionString,
});
client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});
