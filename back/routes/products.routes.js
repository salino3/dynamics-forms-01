const express = require("express");
const { getProducts } = require("../controllers/products.controller");

const routerItems = express.Router();

routerItems.get("/", getProducts);

module.exports = routerItems;
