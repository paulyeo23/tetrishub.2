import db from "../models/index.mjs";

export const addThread = (userId, forumsId, title, details) => {
  return db.Threads.create({
    userId: userId,
    forumsId: forumsId,
    title: title,
    details: details,
  });
};
