import {
  addCommentToEvent,
  addCommentToThread,
} from "../service/commentsTable.mjs";

export function initCommentsController() {
  const replyToThread = (request, response) => {
    const details = request.body.details;
    console.log(request.body);
    const userId = details.userId;
    const threadId = details.threadId;
    const post = details.post;
    const detail = "";
    response.send(addCommentToThread(userId, threadId, post, detail));
  };

  const replyToEvent = (request, response) => {
    const userId = request.body.userId;
    const eventId = request.body.eventId;
    const post = request.body.post;
    response.send(addCommentToEvent(userId, eventId, post));
  };

  return {
    replyToThread,
    replyToEvent,
  };
}
