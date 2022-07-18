import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";

const ThreadsPage = () => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();
  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    }),
      [Info];
  });

  useEffect((
  
  ) => {}, [Info]);
  return Render;
};

export default ThreadsPage;
