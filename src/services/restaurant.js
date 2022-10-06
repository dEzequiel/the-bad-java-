const Restaurant = require("../models/restaurant");

const getAll = async () => {
  const restaurants = await Restaurant.find({});
  return restaurants;
};

const getCuisine = async (cuicineType) => {
  const restaurants = await Restaurant.find({ cuisine: cuicineType });
  return restaurants;
};

exports.getAll = getAll;
exports.getCuisine = getCuisine;
