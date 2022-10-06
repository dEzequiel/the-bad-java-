const services = require("../services/restaurant");

exports.getAll = async (req, res) => {
  try {
    res.status(200).json(await services.getAll());
  } catch (error) {
    res.status(404);
  }
};

exports.getAllByCuisine = async (req, res) => {
  try {
    res.status(200).json(await services.getCuisine(req.params.cuisine));
  } catch (error) {
    res.status(404);
  }
};
