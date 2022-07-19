import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import SubForums from "./Subs";
import Rules from "./Rules";
const ForumPage = () => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();
  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });
  }, []);

  useEffect(() => {
    if (Info != undefined) {
      setRender(
        <div className="contentCol">
          <Rules />
          <SubForums info={Info} />
        </div>,
      );
    }
  }, [Info]);

  return Render;
};

export default ForumPage;
