const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { Session, Game } = require("../../db/models");
const { Op } = require("sequelize");

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const { title, creator, playtype, platform, game, date, description } =
      req.body;
    const session = await Session.create({
      title,
      createdBy: creator,
      playtype,
      platform,
      game,
      date,
      text: description,
    });
    return res.json({
      session,
    });
  })
);

router.get("/:type/:id", async (req, res) => {
  const type = req.params.type;
  const id = req.params.id;
  let list
 if (type === "playtype"){list = await Session.findAll({ where: { playtypeId : id } });}
if (type === "game"){
  list = await Session.findAll({ where: { gameId: id } });
}
if (type === "platform") {
  list = await Session.findAll({ where: { platformId: id } });
}


if (type === "genre") {
  list = await Session.findAll({
  include:[{model: Game,  where: { [Op.or]: [{ genre1: id }, { genre2: id },{genre2:id},] }}],
  });
}
// include:[{ model: Game,
//        through:{
//     where: { [Op.or]: [{ genre1: id }, { genre2: id },{genre2:id},] }},
//     }]
 return res.json({
   list,
 });

});

module.exports = router;
