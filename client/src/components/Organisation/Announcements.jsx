import { useState, useEffect, useParams } from "react";
import { heirarchy } from "./hierarchy.mjs";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";

const Announcements = ({ Info, organisation }) => {
  const [Entries, setEntries] = useState(0);

  const announcements = Info.Announcements.filter((announcement) => {
    return announcement.orgId == organisation.id;
  })
    .sort((a, b) => {
      return b.id - a.id;
    })
    .slice(Number(Entries) * 3, (Number(Entries) + 1) * 3);

  let Render = [];
  announcements.forEach((announcement) => {
    Render.push(
      <Row>
        <h3>{announcement.text}</h3>
      </Row>,
    );
  });

  return Render;
};

export default Announcements;
