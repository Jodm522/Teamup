'use strict';
module.exports = (sequelize, DataTypes) => {
  const Platform = sequelize.define('Platform', {
    platform:{
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {});
  Platform.associate = function(models) {
    // associations can be defined here
  };
  return Platform;
};
