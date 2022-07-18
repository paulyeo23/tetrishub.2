import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";

const UpcomingEvents = ({ Info }) => {
  let Render = [];
  const limit = 5;

  let tempRender = [];
  let events = Info.Events.sort((a, b) => {
    return b.startDate - a.startDate;
  }).slice(0, limit);
  events.forEach((event) => {
    tempRender.push(
      <a href={`/events/${event.id}}`} className="event" bis_skin_checked="1">
        <img
          alt={event.name}
          className="eventlogo day-only"
          srcset="https://img-cdn.hltv.org/eventlogo/nYADQoBBHeOXRjBW1kFOra.png?ixlib=java-2.1.0&amp;w=100&amp;s=3c99078378cb6edf470154865cf55433 2x"
          title={event.name}
          src={`http://localhost:3001/eventlogo/${event.Id}`}
        />
        <span className="eventname">{event.name}</span>
      </a>,
    );
  });
  Render = (
    <aside>
      <h1>
        <a href="/events" className="a-reset" style={{ paddingLeft: "5px" }}>
          EVENTS
        </a>
      </h1>
      <div className="col-box-con">{tempRender}</div>
    </aside>
  );

  return Render;
};

export default UpcomingEvents;
