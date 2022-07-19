import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useParams } from "react-router-dom";
import ThreadHead from "./ThreadHead";
import Comments from "./Comments";
import AddComment from "./AddComment";

const ThreadsPage = () => {
  const { threadName } = useParams();
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();
  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });
  }, []);

  useEffect(() => {
    if (Info != undefined) {
      const thread = Info.Threads.filter((thread) => {
        return thread.title == threadName;
      })[0];
      console.log(thread);

      setRender(
        <div className="forum no-promode">
          <ThreadHead Info={Info} threadId={thread.id} />
          <Comments Info={Info} threadId={thread.id} />
          <AddComment Info={Info} threadId={thread.id} />
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default ThreadsPage;
