import multer from "multer";
import db from "../models/index.mjs";
import initAllMatchesController from "../controllers/allMatchesController.mjs";
import initUserController from "../controllers/userController.mjs";
import { initCommentsController } from "../controllers/Commentscontroller.mjs";

import { initThreadsController } from "../controllers/threadsController.mjs";
import { initSideTablesController } from "../controllers/sideTables/sideTablesController.mjs";

export default function routes(app) {
  const allMatchesController = initAllMatchesController();
  app.get("/", allMatchesController.index);

  const allUserController = initUserController();
  app.post("/login/", allUserController.Login);
  app.post("/register", allUserController.Register);

  const commentsController = initCommentsController();
  app.post("/replyThread", commentsController.replyToThread);

  const threadController = initThreadsController();
  app.post("/createThread", threadController.startNewThread);

  const sideTablesController = initSideTablesController();
  app.get("/leftsidetable", sideTablesController.leftSideTables);
  app.get("/rightsidetable", sideTablesController.rightSideTables);



  // function (request, response) {
  // let data = request.body;
  // let username = data.username;
  // let password = data.password;
  // console.log(username, password);
  // });

  // special JS page. Include the webpack index.html file
  // app.get('/home', (request, response) => {
  //   response.sendFile(resolve('dist', 'main.html'));
  // });
}
