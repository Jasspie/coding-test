const Shuffle = require("../config/Randomize");
const { sharksList, catsList } = require("../data/Images");

const getAllImages = (req, res) => {
  res.json(Shuffle([...sharksList, ...catsList]));
};

const getSharkImages = (req, res) => {
  res.json(Shuffle(sharksList));
};

const getCatImages = (req, res) => {
  res.json(Shuffle(catsList));
};

module.exports = {
  getAllImages,
  getSharkImages,
  getCatImages,
};
