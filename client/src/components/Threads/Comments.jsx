import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import { getCountryFlag } from "../Matches/coutnryflags.mjs";

const Comments = ({ Info, threadId }) => {
  const [Render, setRender] = useState();
  let tempRender = [];

  useEffect(() => {
    async function dateToString(date) {
      console.log(date);
      let datE = new Date(date).toISOString().split(" ");
      let time = datE[1].slice(0, 5);
      console.log(time);
      return { date: Date[0], time: time };
    }

    const comments = Info.Comments.filter((comment) => {
      return comment.threadId == threadId;
    }).sort((a, b) => {
      return a.id - b.id;
    });

    console.log("comments", comments);

    const username = document.cookie.split("=")[1];
    const user = Info.Users.filter((user) => {
      return user.username == username;
    })[0];
    let commentId = 1;

    comments.forEach((comment) => {
      tempRender.push(
        <div class="post " id="r56203235">
          <div class="standard-box">
            <div class="forum-topbar" data-topbar-post="r56203235">
              <a href="" class="replyNum" rel="nofollow">
                #{commentId}
              </a>
              <div class="spacer"></div>
              <img
                alt={user.country}
                src={getCountryFlag(user.country)}
                class="flag"
                title={user.country}
              />
              &nbsp;
              <a
                href="/profile/1540110/official-hltv-weeb"
                class="authorAnchor"
              >
                {user.displayName}
              </a>
            </div>
            <div class="forum-middle">{comment.post}</div>
            <div class="forum-bottombar">
              <span class="time">
                {dateToString(new Date(comment.createdAt)).date}{" "}
                {dateToString(new Date(comment.createdAt)).time}
              </span>
              <div
                class="report-button a-default fa fa-warning"
                title="Report reply"
              ></div>
              <div class="reply-button a-default">
                <i class="fa fa-reply"></i> Reply
              </div>
            </div>
          </div>
        </div>,
      );
      commentId += 1;
    });
    setRender(tempRender);
  }, []);
  return Render;
};

export default Comments;
