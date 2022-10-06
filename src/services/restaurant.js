const Restaurant = require("../models/restaurant");

const getAll = async () => {
  const restaurants = await Restaurant.find({});
  return restaurants;
};

exports.getCuisine = async (cuicineType) => {
  const restaurants = await Restaurant.find({ cuisine: cuicineType });
  return restaurants;
};

exports.getCity = async (cityName) => {
  const restaurants = await Restaurant.find({ borough: cityName });
  return restaurants;
};

exports.getGrade = async (grade) => {
  const restaurants = await Restaurant.find();
};

/**
 * Por ciudad /city
 * Por nota /grade /letra /puntuacion rango 1...5 /grade/:letter   /grade/:mark
 */
// exports.getCuisine = getCuisine;
