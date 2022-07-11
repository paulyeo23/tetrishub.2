import { useState, useEffect, useParams } from "react";
import { getTimeObj } from "../infoFunctions.js";
import { heirarchy } from "./hierarchy.mjs";

const EventCells = ({ Info, organisation }) => {
  let liveEvents = [];
  let finishedEvents = [];

  const [Render, setRender] = useState([]);

  let organisationList = { Organisations: [organisation] };

  const organisationLevel = heirarchy.filter((level) => {
    return level.table == "Organisations";
  });
  const maxLevel = Math.max(...heirarchy.map((o) => o.level));

  for (let i = organisationLevel; i < maxLevel; i++) {
    const currentLevel = heirarchy.filter((h) => {
      return h.level == i;
    });
    const nextLevel = heirarchy.filter((h) => {
      return h.level == i + 1;
    });

    organisationList[currentLevel.table].forEach((currentLevel) => {
      const allNextLevel = Info[nextLevel.table].filter((table) => {
        return table[nextLevel.foreignkey] == currentLevel.id;
      });
      organisationList.nextLevel = allNextLevel;
    });
  }

  organisationList.Events.sort((a, b) => {
    return new Date(b.endDate) - new Date(a.endDate);
  }).forEach((event) => {
    const star =
      event.importance >= 8 ? (
        <img
          class="emoji"
          role="img"
          draggable="false"
          src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg"
          alt="⭐"
        />
      ) : (
        []
      );
    let startDate = getTimeObj(event.startDate);
    let endDate = getTimeObj(event.endDate);
    let edition = Info.Editions.filter((edition) => {
      return edition.id == event.editionId;
    })[0];
    let series = Info.Series.filter((series) => {
      return series.id == edition.seriesId;
    })[0];

    let cell = (
      <tr>
        <td
          style="font-size: 18px; text-align: center; vertical-align: center"
          width="15%"
        >
          <strong>{`${startDate.day} ${startDate.month} - ${endDate.day} ${endDate.month}`}</strong>
        </td>
        <td style="padding: 0px 0px 0px 15px" width="80%">
          <span
            style="font-size: 24px; font-weight: bold"
            href={"www.hltv.org"}
          >
            <img
              draggable="false"
              role="img"
              class="emoji"
              alt="🇵🇱"
              src="https://s.w.org/images/core/emoji/14.0.0/svg/1f1f5-1f1f1.svg"
            />
            {star}
            {`${event.name}`}
          </span>
          <br />
          {`${series.name}`}
          <br />
          {`${event.version}, ${event.location}`}
        </td>
      </tr>
    );
    event.concluded == true ? finishedEvents.push(cell) : liveEvents.push(cell);
  });

  return Render;
};

export default EventCells;
