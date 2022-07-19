import db from "../models/index.mjs";

export const addCommentToThread = (userId, threadId, post, details) => {
  console.log(userId, threadId, post, details);
  return db.Comments.create({
    userId: userId,
    threadId: threadId,
    post: post,
    details: details,
  });
};

export const addCommentToEvent = (userId, eventId, post) => {
  return db.Comments.create({
    userId: userId,
    eventId: eventId,
    post: post,
  });
};
