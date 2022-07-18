import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import Rules from "./Rules";
import SubForums from "./Subs";

const Comments = ({ Info, threadId }) => {
  let Render = [];

  let comments = Info.Comments.filter((comment) => {
    return comment.threadId == threadId;
  }).sort((a, b) => {
    return b.id - a.id;
  });
  for (let i = 0; i < comments.length; i++) {
    comments[i].orderId = i + 1;
  }

  comments[0].filter()
};

return Comments;
