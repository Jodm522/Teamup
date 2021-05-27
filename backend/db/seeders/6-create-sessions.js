"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Sessions",
      [
        {
          title: "My DnD oneshot",
          createdBy: 1,
          playtype: 3,
          platform: 3,
          game: 1,
          date: new Date(2021, 6, 20),
          text: "My curse of strahd game",
        },
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
