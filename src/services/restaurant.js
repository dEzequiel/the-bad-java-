const db_restaurant = require("../models/restaurant");

const getAll = async () => {
  const restaurants = await db_restaurant.find({});
  return restaurants;
};

exports.getAll = getAll;
