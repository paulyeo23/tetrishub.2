"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Threads", [
      {
        title: "Announcements",
        forumsId: 1,
        details: "First announcement",
        userId: 1,
      },
      {
        title: "Tetris stacking and tips",
        forumsId: 2,
        details: "First tip",
        userId: 1,
      },
      {
        title: "Rabbit Hole",
        forumsId: 3,
        details: "First rabbit hole",
        userId: 1,
      },
      {
        title: "Predictions",
        forumsId: 4,
        details: "First prediction",
        userId: 1,
      },
      {
        title: "Hardware and Tech",
        forumsId: 5,
        details: "First hardware advice",
        userId: 1,
      },
      {
        title: "Off Topic",
        forumsId: 6,
        details: "First off-topic",
        userId: 1,
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
