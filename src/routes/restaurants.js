const express = require("express");
const { getAll, getAllByCuisine } = require("../controllers/restaurants");
const router = express.Router();

router.get("/", getAll);
router.get("/cuisine/:cuisine", getAllByCuisine);

module.exports = router;
