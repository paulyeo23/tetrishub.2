import db from "../../models/index.mjs";

const topEloLimit = 5;
const upComingEventsLimit = 5;

console.log();
export const topElos = () => {
  return db.PlayerDetails.findAll({
    where: {
      elo: { [db.Op.not]: null },
    },
    order: [["elo", "DESC"]],
    limit: topEloLimit,
  });
};

export const upcomingEvents = () => {
  return db.Events.findAll({
    order: [["endDate", "ASC"]],
    where: { endDate: { [db.Op.lte]: new Date() } },
    limit: upComingEventsLimit,
  });
};
