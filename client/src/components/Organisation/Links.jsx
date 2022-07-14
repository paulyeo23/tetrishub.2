import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import EventCells from "./Events.jsx";
import HighlightedEvents from "./HighlightedEvents.jsx";
import { heirarchy } from "./hierarchy.mjs";
import { useParams } from "react-router-dom";

const Links = ({ organisation }) => {
  return (
    <div>
      {organisation.youtube == null ? (
        ""
      ) : (
        <Row>
          <a href={organisation.youtube} class="fa fa-youtube" />
        </Row>
      )}
      {organisation.discord == null ? (
        ""
      ) : (
        <Row>
          <a href={organisation.discord} class="fab fa-twitch" />
        </Row>
      )}
      {organisation.facebook == null ? (
        ""
      ) : (
        <Row>
          <a href={organisation.facebook} class="fa fa-facebook" />
        </Row>
      )}
      {organisation.twitter == null ? (
        ""
      ) : (
        <Row>
          <a href={organisation.twitter} class="fa fa-twitter" />
        </Row>
      )}
      {organisation.twitch == null ? (
        ""
      ) : (
        <Row>
          <a href={organisation.twitch} class="fab fa-twitch" />
        </Row>
      )}
    </div>
  );
};
export default Links;
