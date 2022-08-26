"use strict";

const players = [
  {
    playerId: 414,
    score: "2,379,643",
    videolink: "https://www.twitch.tv/videos/1518956651",
  },
  {
    playerId: 414,
    score: "1,837,120",
    videolink: "https://www.twitch.tv/videos/1518956651",
  },
  {
    playerId: 769,
    score: "1,443,120",
    videolink: "https://www.twitch.tv/videos/1515279183",
  },
  {
    playerId: 769,
    score: "1,346,741",
    videolink: "https://www.twitch.tv/videos/1515279183",
  },
  {
    playerId: 34,
    score: "1,388,820",
    videolink: "https://www.twitch.tv/videos/1497820759",
  },
  {
    playerId: 34,
    score: "1,242,040",
    videolink: "https://www.twitch.tv/videos/1497820759",
  },
  {
    playerId: 1025,
    score: "1,308,300",
    videolink: "https://www.twitch.tv/videos/1516713639",
  },
  {
    playerId: 1025,
    score: "1,258,480",
    videolink: "https://www.twitch.tv/videos/1516713639",
  },
  {
    playerId: 278,
    score: "1,327,060",
    videolink: "https://www.twitch.tv/videos/1515235354",
  },
  {
    playerId: 278,
    score: "1,193,560",
    videolink: "https://www.twitch.tv/videos/1515235354",
  },
  {
    playerId: 682,
    score: "1,330,000",
    videolink: "https://www.twitch.tv/videos/1514049954",
  },
  {
    playerId: 682,
    score: "1,176,160",
    videolink: "https://www.twitch.tv/videos/1514049954",
  },
  {
    playerId: 908,
    score: "1,210,141",
    videolink: "https://www.twitch.tv/videos/1517700246",
  },
  {
    playerId: 908,
    score: "1,188,641",
    videolink: "https://www.twitch.tv/videos/1517700246",
  },
  {
    playerId: 161,
    score: "1,243,420",
    videolink: "https://www.twitch.tv/videos/1518751631",
  },
  {
    playerId: 161,
    score: "1,153,420",
    videolink: "https://www.twitch.tv/videos/1518751631",
  },
  {
    playerId: 219,
    score: "1,205,100",
    videolink: "https://www.twitch.tv/videos/1519123910",
  },
  {
    playerId: 219,
    score: "1,165,860",
    videolink: "https://www.twitch.tv/videos/1519123910",
  },
  {
    playerId: 307,
    score: "1,206,160",
    videolink: "https://www.twitch.tv/videos/1518273389",
  },
  {
    playerId: 307,
    score: "1,160,180",
    videolink: "https://www.twitch.tv/videos/1518273389",
  },
  {
    playerId: 336,
    score: "1,195,180",
    videolink: "https://www.twitch.tv/videos/1519060877",
  },
  {
    playerId: 336,
    score: "1,168,100",
    videolink: "https://www.twitch.tv/videos/1519060877",
  },
  {
    playerId: 1062,
    score: "1,192,211",
    videolink: "https://www.twitch.tv/videos/1512383935",
  },
  {
    playerId: 1062,
    score: "1,170,240",
    videolink: "https://www.twitch.tv/videos/1512383935",
  },
  {
    playerId: 691,
    score: "1,207,360",
    videolink: "https://www.twitch.tv/videos/1515659741",
  },
  {
    playerId: 691,
    score: "1,150,100",
    videolink: "https://www.twitch.tv/videos/1515659741",
  },
  {
    playerId: 473,
    score: "1,255,540",
    videolink: "https://www.twitch.tv/videos/1514099454",
  },
  {
    playerId: 473,
    score: "1,099,400",
    videolink: "https://www.twitch.tv/videos/1514099454",
  },
  {
    playerId: 250,
    score: "1,246,100",
    videolink: "https://www.twitch.tv/videos/1518765204",
  },
  {
    playerId: 250,
    score: "1,105,120",
    videolink: "https://www.twitch.tv/videos/1518765204",
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.sequelize
    //   .query(`SELECT * FROM "Events" WHERE (name = 'CTM Masters Jul-22')`)
    //   .then((event) => {
    //     queryInterface.bulkInsert("Seeders", [
    //       {
    //         eventId: event[0][0].id,
    //         tierLimit: 1,
    //         description: "CTM Masters July-22",
    //         averageOf: 2,
    //         seedingMethod: 2,
    //       },
    //     ]);
    //   });
    // let insertlist = [];
    // players.forEach((player) => {
    //   insertlist.push({
    //     seederId: 1,
    //     playerId: player.playerId,
    //     score: Number(player.score.split(",").join("")),
    //     videoLink: player.videolink,
    //   });
    // });
    // await queryInterface.bulkInsert("QualifyingScores", insertlist);
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
