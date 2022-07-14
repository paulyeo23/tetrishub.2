import { useState, useEffect, useParams } from "react";
import { heirarchy } from "./hierarchy.mjs";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";

const About = ({ Info, organisation }) => {
  return <Row>{organisation.about}</Row>;
};

export default About;
