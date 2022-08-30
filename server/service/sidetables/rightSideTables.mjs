import db from "../../models/index.mjs";

const recentMatchesLimit = 5;
const recentActivityLimit = 20;

export const recentMatches = async () => {
  return await db.Matches.findAll({
    include: [
      {
        as: "player1",
        model: db.PlayerDetails,
      },
      {
        as: "player2",
        model: db.PlayerDetails,
      },
    ],
    order: [["dateTime", "DESC"]],
    limit: recentMatchesLimit,
  });
};

export const recentActivity = async () => {
  let threads = await db.Threads.findAll({
    order: [["id", "DESC"]],
    limit: recentActivityLimit,
  });
  const comments = await db.Comments.findAll({
    include: [
      {
        as: "thread",
        model: db.Threads,
      },
    ],
    order: [["id", "DESC"]],
    limit: recentActivityLimit,
  });

  const allActivity = threads.concat(comments).sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  return allActivity;
};
