const express = require("express");
const router = express.Router();

const {
  getAllImages,
  getSharkImages,
  getCatImages,
} = require("../controller/imageContollers");

router.get("/all", getAllImages);
router.get("/shark", getSharkImages);
router.get("/cat", getCatImages);

module.exports = router;
