import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";

const AllResultsPage = () => {
  const [Info, setInfo] = useState();
  const [Render, setRender] = useState([]);
  const [Page, setPage] = useState(0);

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

  function increasePage() {
    setPage(Page + 1);
  }

  function decreasePage() {
    setPage(Page - 1);
  }

  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });
  }, []);

  //result cells
  useEffect(() => {
    if (Info != undefined) {
      const allmatches = Info.Matches.filter((match) => {
        return match.Completed == true;
      });

      const finishedMatches = Info.Matches.filter((match) => {
        return match.completed == true;
      }).sort((a, b) => {
        return new Date(String(b.dateTime)) - new Date(String(a.dateTime));
      });

      const RenderCells = [];

      const matches = finishedMatches.slice(Page * 100 + 1, (Page + 1) * 100);
      let dates = {};

      matches.forEach((match) => {
        let date = new Date(match.dateTime);
        let key = `${date.toLocaleString("default", {
          month: "long",
        })} ${ordinal_suffix_of(date.getDate())} ${date.getFullYear()}`;
        if (dates[key] == undefined) {
          dates[key] = [];
        }
        dates[key].push(match);
      });

      console.log(dates);
      for (let date in dates) {
        let cells = [];
        dates[date].forEach((match) => {
          cells.push(
            <div className="result-con">
              <a href={`http://localhost:3001/match/${match.id}`}>
                <div className="result">
                  <table>
                    <tbody>
                      <tr>
                        <td className="team-cell">
                          <div
                            className="line-align team1"
                            bis_skin_checked="1"
                          >
                            <div
                              className={`team ${
                                match.winnerId == match.player1Id
                                  ? "team-won"
                                  : "team-lost"
                              }`}
                              bis_skin_checked="1"
                            >
                              {
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player1Id,
                                ).alias
                              }
                            </div>
                            <img
                              alt={
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player1Id,
                                ).alias
                              }
                              className="team-logo"
                              title={
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player1Id,
                                ).alias
                              }
                              src={module.getPlayerFlag(
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player1Id,
                                ),
                              )}
                            />
                          </div>
                        </td>
                        <td className="result-score">
                          <span
                            className={
                              match.player1Score >= match.player2Score
                                ? "score-won"
                                : "score-lost"
                            }
                          >
                            {match.player1Score}
                          </span>
                          -
                          <span
                            className={
                              match.player1Score <= match.player2Score
                                ? "score-won"
                                : "score-lost"
                            }
                          >
                            {match.player2Score}
                          </span>
                        </td>
                        <td className="team-cell">
                          <div
                            className="line-align team2"
                            bis_skin_checked="1"
                          >
                            <img
                              alt={
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player2Id,
                                ).alias
                              }
                              className="team-logo"
                              title={
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player2Id,
                                ).alias
                              }
                              src={module.getPlayerFlag(
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player2Id,
                                ),
                              )}
                            />
                            <div className="team " bis_skin_checked="1">
                              {
                                module.getPlayer(
                                  Info.PlayerDetails,
                                  match.player2Id,
                                ).alias
                              }
                            </div>
                          </div>
                        </td>
                        <td className="event">
                          <img
                            alt={
                              module.getEvent(Info.Events, match.eventId).name
                            }
                            className="event-logo smartphone-only"
                            title={
                              module.getEvent(Info.Events, match.eventId).name
                            }
                            src="https://img-cdn.hltv.org/eventlogo/b75aNG0i4UVPNQHX_Tq-Zq.png?ixlib=java-2.1.0&amp;w=50&amp;s=abd9825a16bb8b751c86d126865a5d9f"
                          />
                          <span className="event-name">
                            {module.getEvent(Info.Events, match.eventId).name}
                          </span>
                        </td>
                        <td className="star-cell">
                          <div className="map-text" bis_skin_checked="1">
                            bo{match.bestOf}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </a>
            </div>,
          );
        });
        RenderCells.push(
          <div className="results-sublist" bis_skin_checked="1">
            <div className="standard-headline" bis_skin_checked="1">
              Results for {date}
            </div>
            {cells}
          </div>,
        );
      }
      setRender(
        <div className="results">
          <div
            class="pagination-component pagination-top "
            bis_skin_checked="1"
          >
            <span class="pagination-data">
              {Page * 100 + 1} - {(Page + 1) * 100} of {finishedMatches.length}
            </span>
            <button onClick={decreasePage} class={"pagination-prev inactive"}>
              <i
                class=" fa fa-chevron-left pagination-left"
                aria-hidden="true"
              ></i>
            </button>
            <button onClick={increasePage} class={"pagination-next "}>
              <i
                class=" fa fa-chevron-right pagination-right"
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <div className="results-holder allres">
            <div className="results-all">{RenderCells}</div>
          </div>
        </div>,
      );
    }
  }, [Info, Page]);

  return Render;
};

export default AllResultsPage;
