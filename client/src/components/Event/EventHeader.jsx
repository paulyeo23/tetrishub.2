import { useState, useEffect, startTransition } from "react";
import axios from "axios";
import * as module from "../infoFunctions";

import { useParams } from "react-router-dom";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import Cookies from "universal-cookie";

const EventHeader = ({ Info, event }) => {
  const [Render, setRender] = useState([]);
  const startDate = module.getTimeObj(new Date(event.startDate));
  const endDate = module.getTimeObj(new Date(event.endDate));

  useEffect(() => {
    console.log(Cookies);
    setRender(
      <div
        class="event-header-component standard-box padding no-top-border"
        bis_skin_checked="1"
      >
        <table class="info">
          <thead>
            <tr>
              <th class="headline eventdate">Date</th>
              <th class="headline prizepool">Prize pool</th>
              <th class="headline teamsNumber">Players</th>
              <th class="headline location gtSmartphone-only">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="eventdate">
                <span class="">
                  {startDate.month} {startDate.day}
                  {startDate.ordinal}
                </span>
                <span>
                  {" "}
                  -{" "}
                  <span
                    class=""
                    data-time-format="MMM do yyy"
                    data-unix="1659866400000"
                  >
                    {startDate.month} {startDate.day}
                    {startDate.ordinal} {startDate.year}
                  </span>
                </span>
              </td>
              <td class="prizepool text-ellipsis" title="TBA">
                TBA
              </td>
              <td class="teamsNumber">8</td>
              <td class="location gtSmartphone-only">
                <div class="flag-align" bis_skin_checked="1">
                  <span class="text-ellipsis">Online</span>
                </div>
              </td>
{              <td class="location gtSmartphone-only">
                <div class="flag-align" bis_skin_checked="1">
                  <span class="text-ellipsis">Online</span>
                </div>
              </td>}
            </tr>
          </tbody>
        </table>
      </div>,
    );
  }, [Info]);
  return Render;
};
export default EventHeader;
