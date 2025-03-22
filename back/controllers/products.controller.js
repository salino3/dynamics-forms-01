const { pool } = require("../db.js");

const getProducts = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM products");
  console.log(rows);
  res.json(rows);

  //  res.json({ user: "BdmOPwn593fNsn1", items: [] });
};

module.exports = { getProducts };
