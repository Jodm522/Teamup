'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playtype = sequelize.define('Playtype', {
    playtype: DataTypes.STRING
  }, {});
  Playtype.associate = function(models) {
    Playtype.hasMany(models.Session, {
      foreignKey: "playtypeId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Playtype;
};
