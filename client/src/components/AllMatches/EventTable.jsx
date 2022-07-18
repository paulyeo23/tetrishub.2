import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";

const EventTable = ({ Info }) => {
  const daysAhead = 7;
  const upperDateBound = module.addDays(new Date(), daysAhead);

  let Render = [];

  const weekObj = module.createWeekObj();

  //find all events connected to matches in upcoming days
  let events = [];
  Info.Matches.forEach((match) => {
    let tempEvent = Info.Events.filter((event) => {
      return event.id == match.eventid;
    });

    events = events.concat(tempEvent);
  });
  let Allevents = [...new Set(events)];

  //filter for events that meet minimum importance value
  //change minimum importance value in infoFunctions.js
  let importantevents = Info.Events.slice(0, 2);
  //filter for matches that fall under the important events array
  let importantMatches = [];
  importantevents.forEach((event) => {
    importantMatches.push({
      eventId: event.id,
      matches: Info.Matches.filter((match) => {
        return match.eventId == event.id;
      }),
    });
  });

  if ((importantMatches.length = 0)) {
    return Render;
  }

  let matchWeek = [];

  importantMatches.forEach((event) => {
    let tempmatchWeek = module.createWeek();
    event.matches.forEach((match) => {
      let tempDate = module.getTimeObj(new Date(match.DateTime));
      let tempday = tempDate.dayName;
      let tempkey = module.getKeyByValue(weekObj, tempday);
      tempmatchWeek[tempkey].push(tempDate);
    });
    matchWeek.push({ eventId: event.eventId, matchWeek: tempmatchWeek });
  });

  const generateWeekHeader = () => {
    const startOfWeek = new Date();
    const endOfWeek = module.addDays(new Date(), 6);

    const weekHeader = [
      <th className="guide-event-name">
        <span className="gtSmartphone-only">Event guide - </span>
        <span data-time-format="MMM d">{`${
          startOfWeek.getDate() < 10
            ? `0${startOfWeek.getDate()}`
            : startOfWeek.getDate()
        } ${startOfWeek.getMonth()}`}</span>
        -
        <span data-time-format="MMM d">{`${
          endOfWeek.getDate() < 10
            ? `0${endOfWeek.getDate()}`
            : endOfWeek.getDate()
        } ${endOfWeek.getMonth()}`}</span>
      </th>,
    ];

    for (const day in weekObj) {
      weekHeader.push(
        <th class="guide-weekday">
          <span>{weekObj[day]}</span>
        </th>,
      );
    }
    return weekHeader;
  };
  const eventWeek = [];
  matchWeek.forEach((event) => {
    let tempWeek = [];
    tempWeek.push(
      <td class="guide-event text-ellipsis">
        <img
          alt="IEM Cologne 2022"
          class="event-logo day-only"
          title="IEM Cologne 2022"
          src="https://img-cdn.hltv.org/eventlogo/nYADQoBBHeOXRjBW1kFOra.png?ixlib=java-2.1.0&amp;w=50&amp;s=cdec2e890642716f603d275d582433eb"
        />

        <a
          href="/events/6140/iem-cologne-2022"
          class="strong a-reset"
          bis_skin_checked="1"
        >
          {module.getEventName(Info.Events, event.eventId)}
        </a>
      </td>,
    );
    for (let i = 0; i < daysAhead; i++) {
      let dayMatches = event.matchWeek[`day${i}`];

      if (dayMatches.length == 0) {
        tempWeek.push(
          <td
            class="guide-day no-matches"
            data-parent-timestamp="1658107673116"
          ></td>,
        );
      } else if (dayMatches.length > 0) {
        tempWeek.push(
          <td
            class="guide-day event_6140 active"
            data-parent-timestamp="1658021273116"
          >
            <div class="guide-same-day-matches" bis_skin_checked="1">
              <a
                href="/events/6140/matches"
                class="guide-link a-reset"
                title=""
                bis_skin_checked="1"
              >
                <div class="guide-day-type" bis_skin_checked="1">
                  Match day
                </div>
                <div bis_skin_checked="1">
                  <span data-time-format="H:mm">
                    {`${dayMatches[0].hour}:${dayMatches[0].minutes}`}
                  </span>
                  -
                  <span data-time-format="H:mm">
                    {`${dayMatches[dayMatches.length - 1].hour}:$
                      {dayMatches[dayMatches.length - 1].minutes}`}
                  </span>
                </div>
              </a>
            </div>
          </td>,
        );
      }
    }
    eventWeek.push(tempWeek);
  });
  Render = [
    <div class="guide-scroll" bis_skin_checked="1">
      <table class="guide-table">
        <thead>{generateWeekHeader()}</thead>
        <tbody>{eventWeek}</tbody>
      </table>
    </div>,
  ];

  return Render;
};

export default EventTable;
