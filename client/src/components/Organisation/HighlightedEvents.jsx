import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import EventCell from "./EventCell.jsx";
import { heirarchy } from "./hierarchy.mjs";
import { useParams } from "react-router-dom";

const HighlightedEvents = (organisation) => {
  const [Info, setInfo] = useState({
    orgId,
  });
  // const [Tab, setTab] = useState({ tab: "Overview" });
  const [Render, setRender] = useState([]);

  let eventHighlights = [];

  const pinnedEvents = Info.PinnedEvents.filter((events) => {
    return events.orgId == organisation.id;
  });

  pinnedEvents.forEach((pinnedevent) => {
    let Event = Info.Events.filter((e) => {
      return e.id == pinnedevent.eventId;
    });
    eventHighlights.push(
      <Col>
        <Row>
          <img src="" />
        </Row>
        <Row>{Event.name}</Row>
        <Row>{pinnedevent.description}</Row>
      </Col>,
    );
  });
  return eventHighlights;
};

export default HighlightedEvents;
