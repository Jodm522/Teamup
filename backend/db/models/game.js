"use strict";
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      title: DataTypes.STRING,
      genre1: DataTypes.INTEGER,
      genre2: DataTypes.INTEGER,
      genre3: DataTypes.INTEGER,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {}
  );
  Game.associate = function (models) {
    Game.belongsTo(models.Genre, { foreignKey: "genreId" });
    Game.hasMany(models.Session, {
      foreignKey: "gameId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Game;
};
