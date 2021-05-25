"use strict";
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    "Session",
    {
      title: DataTypes.STRING,
      createdBy: DataTypes.INTEGER,
      playtype: DataTypes.INTEGER,
      platform: DataTypes.INTEGER,
      game: DataTypes.INTEGER,
      date: DataTypes.DATE,
      text: DataTypes.TEXT,
    },
    {}
  );
  Session.associate = function (models) {
    Session.belongsTo(models.User, { foreignKey: "userId" });
    Session.belongsTo(models.Game, { foreignKey: "gameId" });
    Session.belongsTo(models.Playtype, { foreignKey: "playtypeId" });
    Session.belongsTo(models.Platform, { foreignKey: "platformId" });

  };
  return Session;
};
