import { useState, useEffect, useParams } from "react";
import { getTimeObj } from "../infoFunctions.js";
import { heirarchy } from "./hierarchy.mjs";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";

const EventCells = ({ Info, organisation }) => {
  let liveEvents = [];
  let finishedEvents = [];
  let organisationList = { Organisations: [organisation] };

  const [Render, setRender] = useState([]);
  const [Entries, setEntries] = useState(0);
  const [Event, setEvents] = useState("FINISHED EVENTS");

  function changeEntry(e) {
    setEntries(e.target.value);
  }

  function changeEvent(e) {
    setEvents(e.target.value);
    setEntries(0);
  }

  const organisationLevel = heirarchy.filter((level) => {
    return level.table == "Organisations";
  })[0];
  const maxLevel = Math.max(...heirarchy.map((o) => o.level));

  for (let i = organisationLevel.level; i < maxLevel; i++) {
    const currentLevel = heirarchy.filter((h) => {
      return h.level == i;
    })[0];
    const nextLevel = heirarchy.filter((h) => {
      return h.level == i + 1;
    })[0];

    organisationList[currentLevel.table].forEach((currentLevel) => {
      let allNextLevel = Info[nextLevel.table].filter((table) => {
        return table[nextLevel.foreignkey] == currentLevel.id;
      });
      if (allNextLevel.length > 0) {
        organisationList[nextLevel.table] == undefined
          ? (organisationList[nextLevel.table] = allNextLevel)
          : organisationList[nextLevel.table].push(allNextLevel);
      }
    });
  }

  organisationList.Events.sort((a, b) => {
    return new Date(b.endDate) - new Date(a.endDate);
  }).forEach((event) => {
    const star =
      event.importance >= 8 ? (
        <img
          className="emoji"
          role="img"
          draggable="false"
          src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg"
          alt="⭐"
        />
      ) : (
        []
      );

    let startDate = getTimeObj(new Date(event.startDate));
    let endDate = getTimeObj(new Date(event.endDate));
    let edition = Info.Edition.filter((edition) => {
      return edition.id == event.editionId;
    })[0];
    let series = Info.Series.filter((series) => {
      return series.id == edition.seriesId;
    })[0];

    let version = Info.Versions.filter((version) => {
      return event.versionId == version.id;
    })[0];

    let cell = (
      <tr>
        <td
          style={{
            "font-size": "18px",
            "text-align": "center",
            "vertical-align": "center",
          }}
          width="15%"
        >
          <strong>{`${startDate.day} ${startDate.month
            .slice(0, 3)
            .toUpperCase()} '${String(endDate.year).slice(2, 4)} - ${
            endDate.day
          } ${endDate.month.slice(0, 3).toUpperCase()} '${String(
            endDate.year,
          ).slice(2, 4)}`}</strong>
        </td>
        <td style={{ padding: "0px 0px 0px 15px" }} width="80%">
          <span
            style={{ "font-size": "24px", "font-weight": "bold" }}
            href={"www.hltv.org"}
          >
            <img
              draggable="false"
              role="img"
              className="emoji"
              alt="🇵🇱"
              src={
                event.location == null
                  ? "http://localhost:3001/flags/WorldFlag/4x3/placeholder.svg"
                  : `http://localhost:3001/flags/WorldFlag/4x3/${event.location}.svg`
              }
              width={24}
              height={24}
            />
            {star}
            {`${event.name}`}
          </span>
          <br />
          {`${series.name}`}
          <br />
          {`${version.name}, ${
            event.location == null ? "Online" : event.location
          }`}
        </td>
      </tr>
    );
    event.concluded == true ? finishedEvents.push(cell) : liveEvents.push(cell);
  });

  const allEvents = {
    "FINISHED EVENTS": finishedEvents,
    "ONGOING AND UPCOMING": liveEvents,
  };

  useEffect(() => {

    setRender(
      <div>
        <Button value="ONGOING AND UPCOMING" onClick={changeEvent}>
          Live Events
        </Button>
        <Button value="FINISHED EVENTS" onClick={changeEvent}>
          Finished/Upcoming Events
        </Button>
        <Row>
          <Col>{Event}</Col>
        </Row>
        <Row>
          <Col>
            <table>
              <tbody>
                {allEvents[Event].slice(
                  Number(Entries) * 10,
                  (Number(Entries) + 1) * 10,
                )}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <button
            disabled={Number(Entries) == 0 ? true : false}
            onClick={changeEntry}
            value={0}
          >
            {"<<"}
          </button>{" "}
          <button
            disabled={Number(Entries) == 0 ? true : false}
            onClick={changeEntry}
            value={Number(Entries) - 1}
          >
            {"<"}
          </button>
          <h6>
            {Number(Entries) * 10} -{" "}
            {(Number(Entries) + 1) * 10 > allEvents[Event].length
              ? allEvents[Event].length
              : (Number(Entries) + 1) * 10}
          </h6>
          <button
            disabled={
              Number(Entries) == Math.floor(allEvents[Event].length / 10)
                ? true
                : false
            }
            onClick={changeEntry}
            value={Number(Entries) + 1}
          >
            {">"}
          </button>{" "}
          <button
            disabled={
              Number(Entries) == Math.floor(allEvents[Event].length / 10)
                ? true
                : false
            }
            onClick={changeEntry}
            value={Math.floor(allEvents[Event].length / 10)}
          >
            {">>"}
          </button>
        </Row>
      </div>,
    );
  }, [Entries, Info, organisation, Event]);

  return Render;
};

export default EventCells;
