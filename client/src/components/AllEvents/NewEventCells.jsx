import { useState, useEffect } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import Axios from "axios";
import { getPlayerFlag } from "../infoFunctions";

const NewEventCells = () => {
  const [Info, setInfo] = useState();
  const [Render, setRender] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });
  }, []);

  
  function ordinal_suffix_of(i) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

  useEffect(() => {
    if (Info != undefined) {
      const upcomingEvents = Info.Events.filter((event) => {
        return new Date(event.endDate) > new Date();
      }).sort((a, b) => {
        return new Date(a.startDate) - new Date(b.startDate);
      });
      let Rendercells = [];
      upcomingEvents.forEach((event) => {
        let startDate = new Date(event.startDate).toUTCString().split(" ");
        let endDate = new Date(event.startDate).toUTCString().split(" ");
        Rendercells.push(
          <a
            href={`/event/${event.id}`}
            className="a-reset small-event standard-box"
            bis_skin_checked="1"
          >
            <div className="event-logo-container" bis_skin_checked="1">
              <img
                alt={event.name}
                className="logo"
                title={event.name}
                src={`/event/${event.Id}`}
              />
            </div>
            <div className="table-holder" bis_skin_checked="1">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="col-value event-col">
                      <div className="text-ellipsis" bis_skin_checked="1">
                        {event.name}
                      </div>
                    </td>
                    <td className="col-value small-col">
                      {event.playerCount == undefined
                        ? "TBD"
                        : event.playerCount}
                    </td>
                    <td
                      className="col-value small-col prizePoolEllipsis"
                      title="Other"
                    >
                      {event.prizeCash == null ? "Other" : event.prizeCash}
                    </td>
                    <td className="col-value small-col gtSmartphone-only">
                      {event.location == undefined ? "online" : "LAN"}
                    </td>
                  </tr>
                  <tr className="eventDetails">
                    <td>
                      <span className="smallCountry">
                        <img
                          alt={
                            event.country == undefined
                              ? "Online"
                              : event.country
                          }
                          src={
                            event.country == undefined
                              ? `http://localhost:3001/profile/placeholder.svg`
                              : `http://localhost:3001/flags/WorldFlag/4x3/${event.country}`
                          }
                          className="flag"
                          title={
                            event.country == undefined
                              ? "Online"
                              : event.country
                          }
                        />
                        <span className="col-desc">
                          {event.country == undefined
                            ? "Online"
                            : event.country}{" "}
                          |{" "}
                        </span>
                      </span>
                      <span className="col-desc">
                        <span>
                          <span
                            className=""
                            data-time-format="MMM do"
                            data-unix="1659607200000"
                          >
                            {startDate[2]}{" "}
                            {ordinal_suffix_of(Number(startDate[1]))}
                          </span>
                          <span>
                            -
                            <span className="">
                              {endDate[2]}{" "}
                              {ordinal_suffix_of(Number(endDate[1]))}
                            </span>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td className="col-desc">Players</td>
                    <td className="col-desc">Prize</td>
                    <td className="col-desc gtSmartphone-only"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </a>,
        );
      });
      setRender(
        <div className="events-page" bis_skin_checked="1">
          <h2 className="event-status-upcoming-headline">Upcoming events</h2>
          <div className="events-holder">{Rendercells}</div>
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default NewEventCells;
