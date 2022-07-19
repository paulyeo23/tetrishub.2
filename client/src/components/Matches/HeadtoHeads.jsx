import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import { getCountryFlag } from "./coutnryflags.mjs";

const HeadToHeads = ({ Info, player1, player2 }) => {
  const [Render, setRender] = useState();

  useEffect(() => {
    const pastMatchups = Info.Matches.filter((match) => {
      return match.player1Id == player1.id || match.player2Id == player1.id;
    }).filter((match) => {
      return match.player1Id == player2.id || match.player1Id == player2.id;
    });

    let matchupRow = [];

    let winProfile = {
      player1: 0,
      player2: 0,
      draw: 0,
    };
    pastMatchups.forEach((match) => {
      let matchDate = new Date(match.dateTime);
      let event = Info.Events.filter((event) => {
        return event.id == match.eventId;
      })[0];
      let player1Score =
        match.player1Id == player1.id ? match.player1Score : match.player2Score;
      let player2Score =
        match.player1Id == player2.id ? match.player1Score : match.player2Score;
      player1Score > player2Score
        ? (winProfile.player1 += 1)
        : player1Score < player2Score
        ? (winProfile.player2 += 1)
        : (winProfile.draw += 1);

      matchupRow.push(
        <tr className="nowrap">
          <td className="date">
            <a href="/match/${match.id}" bis_skin_checked="1">
              <span>
                {matchDate.getDay()}/{matchDate.getMonth()}{" "}
                {`'${matchDate.getFullYear() % 100}`}
              </span>
            </a>
          </td>
          <td
            className="team1 text-ellipsis gtSmartphone-only underlined winner"
            title={player1.alias}
          >
            <div className="flagAlign" bis_skin_checked="1">
              <img
                alt={player1.country}
                src={module.getPlayerFlag(player1)}
                className="flag flag"
                title={player1.country}
              />
              <a
                href={`/player/${player1.alias}`}
                className="text-ellipsis"
                bis_skin_checked="1"
              >
                {player1.alias}
              </a>
            </div>
          </td>

          <td className="smartphone-only logo-only" title="{player1.alias}">
            <img
              alt={player1.alias}
              className="logo"
              title={player1.alias}
              src={module.getPlayerFlag(player1)}
            />
          </td>
          <td
            className="team2 text-ellipsis gtSmartphone-only underlined"
            title={player2.alias}
          >
            <div className="flagAlign" bis_skin_checked="1">
              <img
                alt={player2.country}
                src={module.getPlayerFlag(player2)}
                className="flag flag"
                title={player2.country}
              />
              <a
                href="/player/${player2.alias}"
                className="text-ellipsis"
                bis_skin_checked="1"
              >
                {player2.alias}
              </a>
            </div>
          </td>
          <td className="smartphone-only logo-only" title="{player2.alias}">
            <img
              alt={player2.alias}
              className="logo"
              title={player2.alias}
              src={module.getPlayerFlag(player2)}
            />
          </td>
          <td className="event text-ellipsis underlined" title={event.name}>
            <a href={`/event/${event.id}`} className="" bis_skin_checked="1">
              {event.name}
            </a>
          </td>
          <td className="map bold">
            <div className="dynamic-map-name-short" bis_skin_checked="1">
              Bo3
            </div>
            <div className="dynamic-map-name-full" bis_skin_checked="1">
              Bo5
            </div>
          </td>

          <td className="result">
            <span
              className={
                match.player1Score >= match.player2Score ? "won" : "lost"
              }
            >
              {" "}
              {match.player1Score}
            </span>
            -{" "}
            <span
              className={
                match.player2Score >= match.player1Score ? "won" : "lost"
              }
            >
              {" "}
              {match.player2Score}
            </span>
          </td>
        </tr>,
      );
    });
    const headToHead = (
      <div className="head-to-head" bis_skin_checked="1">
        <div className="standard-box flexbox padding" bis_skin_checked="1">
          <div className="flexbox team1" bis_skin_checked="1">
            <img
              alt={player1.alias}
              src={module.getPlayerFlag(player1)}
              className="logo day-only"
              title={player1.alias}
              height="25px"
              width="25px"
            />
            <a
              href="/player/{player1.alias}"
              className="teamName"
              bis_skin_checked="1"
            >
              {player1.alias}
            </a>
          </div>
          <div
            className="flexbox-column flexbox-center grow right-border"
            bis_skin_checked="1"
          >
            <div className="bold" bis_skin_checked="1">
              {winProfile.player1}
            </div>
            <div className="description" bis_skin_checked="1">
              Wins
            </div>
          </div>
          <div
            className="flexbox-column flexbox-center grow"
            bis_skin_checked="1"
          >
            <div className="bold" bis_skin_checked="1">
              {winProfile.draw}
            </div>
            <div className="description" bis_skin_checked="1">
              Draws
            </div>
          </div>
          <div
            className="flexbox-column flexbox-center grow left-border"
            bis_skin_checked="1"
          >
            <div className="bold" bis_skin_checked="1">
              {winProfile.player2}
            </div>
            <div className="description" bis_skin_checked="1">
              Wins
            </div>
          </div>
          <div className="flexbox team2" bis_skin_checked="1">
            <a
              href={`/player/${player2.alias}`}
              className="teamName"
              bis_skin_checked="1"
            >
              {player2.alias}
            </a>
            <img
              alt={player2.alias}
              src={module.getPlayerFlag(player2)}
              className="logo"
              title={player2.alias}
              loading="lazy"
              height="25px"
              width="25px"
            />
          </div>
        </div>
      </div>
    );
    setRender(
      <div>
        <span class="headline">Head to head</span>
        {headToHead}
        <div
          className="standard-box head-to-head-listing spoiler"
          bis_skin_checked="1"
        >
          <table className="table">
            <tbody>{matchupRow}</tbody>
          </table>
        </div>
      </div>,
    );
  }, []);
  return Render;
};

export default HeadToHeads;
