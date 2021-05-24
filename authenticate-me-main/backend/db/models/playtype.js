'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playtype = sequelize.define('Playtype', {
    playtype: DataTypes.STRING
  }, {});
  Playtype.associate = function(models) {
    // associations can be defined here
  };
  return Playtype;
};