import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import EventCells from "./EventCell.jsx";
import HighlightedEvents from "./HighlightedEvents.jsx";
import { heirarchy } from "./hierarchy.mjs";
import { useParams } from "react-router-dom";

const OrganisationTab = () => {
  const [Info, setInfo] = useState({
    Brackets: [],
    Edition: [],
    Events: [],
    GameResults: [],
    Matches: [],
    Organisation: [],
    PlayerDetails: [],
    QualifyingScores: [],
    Series: [],
    Streams: [],
    Users: [],
    PinnedEvents: [],
  });
  // const [Tab, setTab] = useState({ tab: "Overview" });
  const [Render, setRender] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);
  const { orgName } = useParams();

  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });

    console.log("connected");
  }, []);

  

  useEffect(() => {
    organisation = Info.Organisation.filter((org) => {
      return org.name == orgName;
    });
  }, [Info]);
  return Render;
};

export default OrganisationTab;
