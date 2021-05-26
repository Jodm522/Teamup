const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const {Genre} = require('../../db/models')


router.get(
  "/",
  asyncHandler(async function(req, res) {
    const genresList = await Genre.findAll();
    return res.json(genresList);
  })
);

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const id = req.params.id;
    const genre = await Genre.findByPk(id);
    res.json(genre);
  })
);
module.exports = router;
