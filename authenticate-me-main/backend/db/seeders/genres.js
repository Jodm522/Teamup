"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Genres",
      [
        { genre: "Indie" },
        { genre: "Action" },
        { genre: "Adventure" },
        { genre: "Simulation" },
        { genre: "RPG" },
        { genre: "Tabletop" },
        { genre: "Strategy" },
        { genre: "MMO" },
        { genre: "Puzzle" },
        { genre: "Racing" },
        { genre: "Action" },
        { genre: "FPS" },
        { genre: "Story" },
        { genre: "Cards" },
        { genre: "Co-op" },
        { genre: "Building" },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
