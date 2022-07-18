"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Forums", [
      {
        subName: "Announcements",
        details: "Announcements from all organisers",
      },
      {
        subName: "Tetris stacking and tips",
        details: "Improve your stacking or help others with it",
      },
      {
        subName: "Tetris Rants",
        details: "Frank discussions here, but stick to the limits",
      },
      {
        subName: "Predictions",
        details: "Make bold predictions for all to hear",
      },
      {
        subName: "Hardwares and Emulators",
        details:
          "Discussions on hardwares and emulators for tetris or otherwise",
      },
      {
        subName: "Off Topic",
        details: "Everything else goes here",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
