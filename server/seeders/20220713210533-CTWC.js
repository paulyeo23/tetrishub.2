"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert("Permissions", [
    //   {
    //     name: "Classic Tetris World Championships",
    //   },
    // ]);
    // await queryInterface.bulkInsert("Organisations", [
    //   {
    //     name: "Classic Tetris World Championships",
    //     permissionId: 2,
    //     shortName: "CTWC",
    //   },
    // ]);
    // await queryInterface.bulkInsert("Series", [
    //   {
    //     name: "Classic Tetris World Championships",
    //     permissionId: 2,
    //     orgId: "2",
    //   },
    // ]);
    // await queryInterface.bulkInsert("Editions", [
    //   {
    //     name: "2022",
    //     seriesId: 2,
    //     permissionId: 2,
    //   },
    // ]);
    // await queryInterface.bulkInsert("Events", [
    //   {
    //     name: "CTWC 2022",
    //     editionId: 2,
    //     startDate: "2022-08-20 12:00:00",
    //     endDate: "2010-09-21 12:00:00",
    //     ongoing: false,
    //     concluded: false,
    //     permissionId: 2,
    //     seedingMethod: 1,
    //   },
    // ]);
    // await queryInterface.bulkInsert("Seeders", [
    //   {
    //     description: "CTWC 2022",
    //     ongoing: true,
    //     eventId: 3,
    //     tierLimit: 1,
    //     ongoing: false,
    //     concluded: false,
    //     permissionId: 2,
    //     seedingMethod: 1,
    //   },
    // ]);
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
