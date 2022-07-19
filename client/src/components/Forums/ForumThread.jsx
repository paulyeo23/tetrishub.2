import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useParams } from "react-router-dom";
import SubForums from "./Subs";
import { getEntriesAssociated, timeSince } from "./getEntriesAssociated.mjs";

const ForumThread = () => {
  const { subName } = useParams();
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();
  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });


  }, []);
  useEffect(() => {
    let tempRender = [];

    let forumSubName = subName.split("-").join(" ");
    if (Info != undefined) {
      const forum = Info.Forums.filter((forum) => {
        return forum.subName == forumSubName;
      })[0];
      Info.Threads.filter((thread) => {
        return thread.forumsId == forum.id;
      }).forEach((thread) => {
        let dates = [];
        let entries = getEntriesAssociated("Threads", thread, Info);
        let tables = Object.keys(entries);
        tables.forEach((table) => {
          dates = dates.concat(entries[table]);
        });
        let lastUpdated = dates.sort((a, b) => {
          return b.createdAt - a.createdAt;
        })[0];
        let author = Info.Users.filter((user) => {
          return user.id == thread.userId;
        })[0];
        let replies = Info.Comments.filter((comment) => {
          return comment.threadId == thread.Id;
        });
        tempRender.push(
          <tr className="tablerow">
            <td className="name">
              <a href={`/forums/threads/${thread.title.split(" ").join("-")}`}>
                {thread.title}
              </a>
            </td>
            <td className="replies">{replies.length}</td>
            <td className="author">
              <a href="/profile/1411886/euph0ria" bis_skin_checked="1">
                {author.displayName}
              </a>
            </td>
            <td className="activity">
              <span className="smartphone-only">
                {timeSince(new Date(lastUpdated.createdAt))}
              </span>
            </td>
          </tr>,
        );
      });
    }
    setRender(
      <div class="forumthreads" bis_skin_checked="1">
        <table className="table standard-box">
          <tbody>
            <tr className="tableheader">
              <td>Topic</td>
              <td>Replies</td>
              <td className="author-header">Author</td>
              <td>Activity</td>
            </tr>
            {tempRender}
          </tbody>
        </table>
      </div>,
    );
  }, [Info]);
  return Render;
};

export default ForumThread;
