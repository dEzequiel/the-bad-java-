const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({});

const Restaurant = mongoose.model("restaurants", restaurantSchema);

module.exports = Restaurant;
