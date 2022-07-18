import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";

const Rules = () => {
  return (
    <div className="forum-rules" bis_skin_checked="1">
      <div className="standard-box padding" bis_skin_checked="1">
        <div className="newsdsl" bis_skin_checked="1">
          <div className="newstext-con" bis_skin_checked="1">
            <h2>Rules:</h2>
            <h3>Don't insult others</h3>
            <blockquote>
              <p className="news-block">
                Criticising is allowed, but no details that are not publicly
                available
              </p>
              <p className="news-block">Keep it civil</p>
            </blockquote>
            <h3>Don't spam</h3>
            <blockquote>
              <p className="news-block">
                Referral links, 1st post hunt, other comments, stats etc.
              </p>
            </blockquote>
            <h3>Don't troll</h3>
            <blockquote>
              <p className="news-block">
                Useless blogs, threads and posts, irrelevant posts, baiting etc.
              </p>
            </blockquote>
            <h3>Do as instructed.</h3>
            <blockquote>
              <p className="news-block">
                If asked, instructed or warned, do as told
              </p>
            </blockquote>
            <h2>Guidelines:</h2>
            <blockquote>
              <p className="news-block">Act like a normal person</p>
            </blockquote>
            <blockquote>
              <p className="news-block">
                The more you disagree, the more civil your writing ought be
              </p>
            </blockquote>
            <blockquote>
              <p className="news-block">
                When in the right context most things go, as long as you don’t
                violate the rules
              </p>
            </blockquote>
            <blockquote>
              <p className="news-block">
                You are entitled to your opinion, as long as you don’t violate
                the rules
              </p>
            </blockquote>
            <blockquote>
              <p className="news-block">
                You are responsible for the threads you participate in. No one
                can force you to join in or read it
              </p>
            </blockquote>
            <blockquote>
              <p className="news-block">
                You are encouraged to use the report button to let us know about
                rule-breaking behaviour
              </p>
            </blockquote>
            <blockquote>
              <p className="news-block">English only</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
