import { useState, useEffect, useParams } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";

const Rules = () => {
  return (
    <Container className="container">
      <Row>
        <h1>RULES:</h1>
      </Row>
      <Row>
        <Row>
          <h2>No personal insults</h2>
        </Row>
        <ul>
          <li>
            Criticising players is allowed, but nothing that is not publicly
            available
          </li>
          <li>Keep it civil</li>
          <li>Poorlack, Burger, Favela, retard, faggot, etc.</li>
        </ul>
      </Row>
      <Row>
        <Row>
          <h2>Don't spam</h2>
        </Row>
        <ul>
          <li>Referral links, 1st post hunt, other comments, stats etc.</li>
        </ul>
      </Row>
      <Row>
        <Row>
          <h2>Don't troll</h2>
        </Row>
        <ul>
          <li>
            Useless blogs, threads and posts, irrelevant posts, baiting etc.
          </li>
        </ul>
      </Row>
      <Row>
        <Row>
          <h2>Do as instructed</h2>
        </Row>
        <ul>
          <li>If asked, instructed or warned, do as told</li>
        </ul>
      </Row>
    </Container>
  );
};

export default Rules;
