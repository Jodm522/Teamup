"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Sessions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users", key: "id" },
      },
      playtype: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Playtypes", key: "id" },
      },
      platform: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Platforms", key: "id" },
      },
      game: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Games", key: "id" },
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Sessions");
  },
};
