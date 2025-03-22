const pg = require("pg");

const { DATABASE, HOST, PASSWORD, PORT_DB, USER } = require("./config");

const pool = new pg.Pool({
  user: USER,
  host: HOST,
  password: PASSWORD,
  database: DATABASE,
  port: PORT_DB,
});

module.exports = { pool };
