import db from "../../models/index.mjs";

const recentMatchesLimit = 5;
const recentActivityLimit = 20;

export const recentMatches = async () => {
  return await db.Matches.findAll({
    include: [
      {
        model: db.PlayerDetails,
      },
    ],
    order: [["updatedAt", "DESC"]],
    limit: recentMatchesLimit,
  });
};

export const recentActivity = async () => {
  let threads = await db.Threads.findAll({
    order: [["id", "DESC"]],
    limit: recentActivityLimit,
  });
  const comments = await db.Comments.findAll({
    order: [["id", "DESC"]],
    limit: recentActivityLimit,
  });

  threads = threads.filter((thread) => {
    return (
      comments.filter((comment) => {
        comment.threadId == thread.id;
      }).length == 0
    );
  });

  const allActivity = threads.concat(comments).sort((a, b) => {
    return b.updatedAt - a.updatedAt;
  });

  return allActivity.slice(0, recentActivityLimit);
};
