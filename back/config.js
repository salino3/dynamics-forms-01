const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  USER,
  HOST,
  PASSWORD,
  DATABASE,
  PORT_DB,
  //
  FRONT_END_PORT,
  PORT = 3000,
} = process.env;
