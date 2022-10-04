const express = require("express");
const { getAll } = require("../../controllers/restaurants");
const router = express.Router();

router.get("/", getAll);

module.exports = router