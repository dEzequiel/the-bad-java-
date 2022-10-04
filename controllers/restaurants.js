const services = require("../src/services/restaurant");

exports.getAll = async (req, res) => {
  try {
    res.status(200).json(await services.getAll());
  } catch (error) {
    res.status(404);
  }
};
