"use strict";
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      genre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {}
  );
  Genre.associate = function (models) {
   Genre.hasMany(models.Game, {
     foreignKey: "genreId",
     onDelete: "CASCADE",
     hooks: true,
   });
  };
  return Genre;
};
