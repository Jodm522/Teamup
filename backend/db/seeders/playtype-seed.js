"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Playtypes",
      [
        { playtype: "Casual" },
        { playtype: "Competitive" },
        { playtype: "Team" },
      ],
      {}
    );
    /*
       Add altering commands here.
      Return a promise to correctly handle asynchronicity.
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
