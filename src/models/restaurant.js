const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  address: {
    type: mongoose.Schema.Types.Mixed,
  },
  borough: {
    type: mongoose.Schema.Types.String,
  },
  cuisine: {
    type: mongoose.Schema.Types.String,
  },
  grades: {
    type: [mongoose.Schema.Types.Mixed],
  },
  name: {
    type: mongoose.Schema.Types.String,
  },
  restaurant_id: {
    type: mongoose.Schema.Types.String,
  },
});

const Restaurant = mongoose.model("restaurants", restaurantSchema);

module.exports = Restaurant;
