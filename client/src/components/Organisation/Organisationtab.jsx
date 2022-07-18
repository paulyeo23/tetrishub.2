import { useState, useEffect } from "react";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import axios from "axios";
import EventCells from "./Events.jsx";
import HighlightedEvents from "./HighlightedEvents.jsx";
import { heirarchy } from "./hierarchy.mjs";
import { useParams } from "react-router-dom";
import OrgInfo from "./OrgInfo";
import Links from "./Links";

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
  const [Tab, setTab] = useState("About");
  const queryParams = new URLSearchParams(window.location.search);
  const { orgName } = useParams();

  function changeTab(e) {
    setTab(e.target.value);
  }

  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });

  }, []);

  useEffect(() => {
    const organisation = Info.Organisation.filter((org) => {
      return org.name == undefined
        ? undefined
        : org.name.toLowerCase() == orgName.toLowerCase();
    })[0];

    if (organisation != undefined) {
      const renderTab = {
        Events: <EventCells Info={Info} organisation={organisation} />,
      };

      setRender(
        <div>
          <Container>
            <Row>
              <h1>{organisation.name}</h1>
            </Row>

            <Row>
              <Col>
                <OrgInfo organisation={organisation} />
              </Col>
              <Col>
                <Links organisation={organisation} />
              </Col>
            </Row>
          </Container>

          {/* <iframe
            scrolling="no"
            id="chat_embed"
            src="https://www.twitch.tv/embed/franticthumb/chat?parent=localhost&quot"
            height="500"
            width="350"
          /> */}
          <div>{organisation.description}</div>
          <Row>
            <Button value="About" onClick={changeTab}>
              About
            </Button>
            <Button value="Announcements" onClick={changeTab}>
              Announcements
            </Button>
            <Button value="Events" onClick={changeTab}>
              Events
            </Button>
            <Button value="Gallery" onClick={changeTab}>
              Gallery
            </Button>
          </Row>
          <HighlightedEvents Info={Info} organisation={organisation} />
          <Row>
            <EventCells Info={Info} organisation={organisation} />
          </Row>
          <iframe
            src="https://player.twitch.tv/?channel=ClassicTetris&parent=localhost"
            height="576"
            width="720"
          />
        </div>,
      );
    }
  }, [Info, Tab]);

  return Render;
};

export default OrganisationTab;
