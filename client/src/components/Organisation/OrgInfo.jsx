import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import EventCells from "./Events.jsx";
import HighlightedEvents from "./HighlightedEvents.jsx";
import { heirarchy } from "./hierarchy.mjs";
import { useParams } from "react-router-dom";

const OrgInfo = ({ organisation }) => {
  return (
    <div>
      <Row>
        <Col>Organisation: </Col>
        <Col>{organisation.name}</Col>
      </Row>
      <Row>
        <Col>Short Name: </Col>
        <Col>{organisation.shortName}</Col>
      </Row>
      <Row>
        <Col>Owner: </Col>
        <Col>{organisation.owner}</Col>
      </Row>
      {organisation.website == null ? (
        ""
      ) : (
        <Row>
          <Col>Website: </Col>
          <Col>{organisation.website}</Col>
        </Row>
      )}
      {organisation.store == null ? (
        ""
      ) : (
        <Row>
          <Col>Store: </Col>
          <Col>{organisation.store}</Col>
        </Row>
      )}
    </div>
  );
};
export default OrgInfo;
