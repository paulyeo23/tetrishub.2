import { addThread } from "../service/threadsTable.mjs";

export function initThreadsController() {
  const startNewThread = (request, response) => {
    console.log(request.body.details);
    const thread = request.body.details;
    const userId = thread.userId;
    const forumsId = thread.forumsId;
    const title = thread.title;
    const details = thread.details;
    addThread(userId, forumsId, title, details).then((result) => {
      response.send(result);
    });
  };

  return {
    startNewThread,
  };
}
