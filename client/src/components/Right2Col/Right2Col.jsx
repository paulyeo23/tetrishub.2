import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import LatestResults from "./LatestResults";
import RecentActivity from "./RecentActivity";

const Right2Col = () => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();
  useEffect(() => {
    axios("http://localhost:3001/rightsidetable").then((response) => {
      setInfo(response.data);
    });


  }, []);

  useEffect(() => {
    if (Info != undefined) {
      setRender(
        <div className="right2Col">
          <LatestResults Info={Info} />
          <RecentActivity Info={Info} />
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default Right2Col;
