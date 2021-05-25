const express = require("express");
const asyncHandler = require("express-async-handler");
const genresRepo = require("../../db/genresRepo");
const router = express.Router();
const {Genre} = require('../../db/models')
router.get(
  "/",
  asyncHandler(async function(req, res) {
    const genresList = await Genre.findAll();
    return res.json(genresList);
  })
);

module.exports = router;
