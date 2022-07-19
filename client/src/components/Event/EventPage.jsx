import { useState, useEffect } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useParams } from "react-router-dom";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import PlayersAttending from "./playersAttending";
import EventHeader from "./EventHeader";
import TourneyBrackets from "./bracketstest";
import Seeds from "./Seeds";
import SubmitQual from "./SubmitQual";

const EventPage = () => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();

  const { eventId } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios("http://localhost:3001/");
      setInfo(response.data);
    };
    getInfo();
  }, []);

  useEffect(() => {
    if (Info != undefined) {
      const event = Info.Events.filter((event) => {
        return event.id == eventId;
      })[0];

      console.log(event);
      setRender(
        <div>
          <h1>{event.name}</h1>
          <EventHeader Info={Info} event={event} />
          <PlayersAttending Info={Info} eventId={eventId} />
          {event.live == true ? (
            <TourneyBrackets Info={Info} eventId={eventId} />
          ) : (
            ""
          )}

          <Seeds Info={Info} eventId={eventId} />
          <SubmitQual />
        </div>,
      );
    }
  }, [Info]);

  return Render;
};

export default EventPage;
