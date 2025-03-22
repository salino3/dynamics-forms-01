const express = require("express");

const routerItems = express.Router();

routerItems.get("/", (req, res) => {
  res.json({ user: "BdmOPwn593fNsn1", items: [] });
});

module.exports = routerItems;
