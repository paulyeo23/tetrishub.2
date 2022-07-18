import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";

import { getEntriesAssociated, timeSince } from "./getEntriesAssociated.mjs";

const SubForums = ({ info }) => {
  let Subs = [];
  info.Forums.forEach((sub) => {
    let dates = [];
    let entries = getEntriesAssociated("Forums", sub, info);
    let tables = Object.keys(entries);
    tables.forEach((table) => {
      dates = dates.concat(entries[table]);
    });
    let lastUpdated = dates.sort((a, b) => {
      return b.createdAt - a.createdAt;
    })[0];


    Subs.push(
      <Row className="forumContainer" style={{}}>
        <div className="forumDesc">
          <a href={`/forums/${sub.subName.split(" ").join("-")}`}>
            <div className="forumTitle">{sub.subName}</div>
          </a>
          <div className="forumDesc">{sub.details}</div>
        </div>
        <div className="forumAct">
          {`${timeSince(new Date(lastUpdated.createdAt))} ago`}
        </div>
      </Row>,
    );
  });
  return (
    <div className="forumlist">
      <div className="standard-box">
        <div className="sectionheader">
          <div className="forumRules">Last updated</div>
        </div>
        <div>{Subs}</div>
      </div>
    </div>
  );
};

export default SubForums;
