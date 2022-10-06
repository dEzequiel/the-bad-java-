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

exports.getAllGrades = async (req, res) => {
  try {
    var letter = req.params.letter;
    var mark = req.params.mark;

    if (letter === undefined && mark !== undefined) {
      res.status(200).json(await services.getGrade(mark));
    } else if (letter !== undefined && mark === undefined) {
      res.status(200).json(await services.getGrade(letter));
    } else {
      res.status(200).json(await services.getGrade());
    }
  } catch (error) {
    res.status(404);
  }
};
