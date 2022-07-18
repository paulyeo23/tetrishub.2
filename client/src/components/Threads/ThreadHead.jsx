import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import Rules from "../Forums/Rules";
import SubForums from "../Forums/Subs";

const ThreadHead = ({ Info, threadId }) => {
  const [Render, setRender] = useState([]);

  function dateToString(date) {
    let date = new Date(date).toISOString().split(" ");
    let time = date[1].slice(0, 5);
    return { date: date[0], time: time };
  }

  useEffect(() => {
    if (Info != undefined) {
      let ThreadHead = [];
      const thread = Info.Threads.filter((thread) => {
        return thread.id == threadId;
      })[0];

      const user = Info.Users.filter((user) => {
        return user.id == thread.userId;
      })[0];

      ThreadHead.push(
        <div
          class="forumthread no-promode"
          data-thread="2658753"
          bis_skin_checked="1"
        >
          <div class="clearfix text-ellipsis" bis_skin_checked="1">
            <span class="standard-headline">
              <a
                href="/forums/counterstrike"
                class="a-reset"
                bis_skin_checked="1"
              >
                {
                  Info.Forums.filter((forum) => {
                    return forum.id == thread.forumsId;
                  })[0].subName
                }
              </a>
            </span>
            &gt;
            <span class="standard-headline">
              <a
                href="/forums/threads/2658753/stewie-in-shambles"
                class="a-reset text-ellipsis"
                bis_skin_checked="1"
              >
                {thread.title}
              </a>
            </span>
          </div>
          <div class="standard-box" bis_skin_checked="1">
            <div class="forum-topbar" bis_skin_checked="1">
              <div class="topic" bis_skin_checked="1">
                {thread.title}
              </div>
              <div class="spacer" bis_skin_checked="1"></div>
              <img
                alt={user.country}
                src={`"/img/static/flags/WorldFlag/${user.country}`}
                class="flag"
                title={user.country}
              />
              <a
                href={`/profile/1522999/${user.id}`}
                class="authorAnchor"
                bis_skin_checked="1"
              >
                &nbsp;{user.displayName}&nbsp;
              </a>
            </div>
            <div class="forum-middle" bis_skin_checked="1">
              {thread.details}
            </div>
            <div class="forum-bottombar" bis_skin_checked="1">
              <div
                class="time"
                data-time-format="yyyy-MM-dd HH:mm"
                data-unix="1658104878000"
                bis_skin_checked="1"
              >
                {dateToString(new Date(thread.createdAt)).date}{" "}
                {dateToString(new Date(thread.createdAt)).time}
              </div>
              <div class="report-button a-default" bis_skin_checked="1">
                <i class="fa fa-warning"></i>
              </div>
              <div class="reply-button a-default" bis_skin_checked="1">
                <i class="fa fa-reply"></i> Reply
              </div>
            </div>
          </div>
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default ThreadHead;
