import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import { getCountryFlag } from "./coutnryflags.mjs";

const HeadToHeads = ({ Info, player1, player2 }) => {
  const [Render, setRender] = useState();

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
    let event = Info.Events.fitler((event) => {
      return event.id == match.eventId;
    });
    let player1Score =
      match.player1Id == player1.id ? match.player1Score : match.player2Score;
    let player2Score =
      match.player1Id == player2.id ? match.player1Score : match.player2Score;
    player1Score > player2Score
      ? (winProfile.player1 += 1)
      : player1Score < player2Score
      ? (winProfile.player2 += 1)
      : (draw += 1);

    matchupRow.push(
      <tr class="row nowrap  ">
        <td class="date">
          <a
            href="/matches/2357271/mibr-academy-vs-daotsu-monster-energy-bgs-bomb-b-cup-2022"
            data-link-tracking-page="Matchpage"
            data-link-tracking-column="[Main content]"
            data-link-tracking-destination="Click on Date [Head to head] [text]"
            bis_skin_checked="1"
          >
            <span data-time-format="d/M yy" data-unix="1657662215000">
              {matchDate.getDay()}/{matchDate.getMonth()}{" "}
              {`'${matchDate.getFullYear() % 100}`}
            </span>
          </a>
        </td>
        <td
          class="team1 text-ellipsis gtSmartphone-only underlined winner"
          title="BobZ, card, lub, beg0d, insani"
        >
          <div class="flagAlign" bis_skin_checked="1">
            <img
              alt={player1.country}
              src={module.getPlayerFlag(player1)}
              class="flag flag"
              title={player1.country}
            />
            <a
              href={`/player/${player1.country}`}
              class="text-ellipsis"
              bis_skin_checked="1"
            >
              {player1.alias}
            </a>
          </div>
        </td>
        <td
          class="smartphone-only logo-only"
          title="BobZ, card, lub, beg0d, insani"
        >
          <img
            alt="MIBR Academy"
            class="logo day-only"
            title="MIBR Academy"
            src="https://img-cdn.hltv.org/teamlogo/gFQKd48pLOvrtEDXhcHxkZ.png?ixlib=java-2.1.0&amp;w=50&amp;s=76693c9855cb7f3afa733ba3c4db0ac9"
          />
        </td>

        <td class="event text-ellipsis  " title={event.name}>
          <a
            href="/events/6651/monster-energy-bgs-bomb-b-cup-2022"
            class=""
            data-link-tracking-page="Matchpage"
            data-link-tracking-column="[Main content]"
            data-link-tracking-destination="Click on Event name [Head to head] [text]"
            bis_skin_checked="1"
          >
            Monster Energy BGS Bomb B Cup 2022
          </a>
        </td>
        <td class="map ">
          <div class="dynamic-map-name-short" bis_skin_checked="1">
            ovp
          </div>
          <div class="dynamic-map-name-full" bis_skin_checked="1">
            Overpass
          </div>
        </td>
        <td class="result">
          <span class="won">19</span> - <span class="lost">16</span>
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
};

export default HeadToHeads;
