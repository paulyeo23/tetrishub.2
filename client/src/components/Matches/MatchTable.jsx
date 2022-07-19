import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import { getCountryFlag } from "./coutnryflags.mjs";

const MatchTable = ({ Info, matchId }) => {
  const [Render, setRender] = useState([]);
  const [time, setTime] = useState(Date.now());

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
    const match = Info.Matches.filter((result) => {
      return result.id == matchId;
    })[0];
    const event = Info.Events.filter((event) => {
      return event.id == match.eventId;
    })[0];

    if (match != undefined) {
      const matchDetails = {
        matchTime: module.getTimeObj(new Date(match.dateTime)),
        player1: module.getPlayer(Info.PlayerDetails, match.player1Id),
        player2: module.getPlayer(Info.PlayerDetails, match.player2Id),
        event: module.getEvent(Info.Events, match.eventId),
        countdown: module.calculateTimeLeft(new Date(match.dateTime)),
      };

      matchDetails.player1.score = match.player1Score;
      matchDetails.player1.position = 1;
      matchDetails.player2.score = match.player2Score;
      matchDetails.player2.position = 2;

      setRender(
        <div className="standard-box teamsBox" bis_skin_checked="1">
          <div className="team" bis_skin_checked="1">
            <img
              alt={matchDetails.player1.country}
              src={getCountryFlag(matchDetails.player1.country)}
              className="team1"
              title={matchDetails.player1.country}
            />
            <div className="team1-gradient" bis_skin_checked="1">
              <a
                href={`/player/${matchDetails.player1.alias}`}
                bis_skin_checked="1"
              >
                <img
                  alt={matchDetails.player1.alias}
                  className="logo day-only"
                  srcSet=""
                  title={matchDetails.player1.alias}
                  height="60px"
                  width="120px"
                  src={module.getPlayerPhoto(
                    Info.PlayerDetails,
                    matchDetails.player1.id,
                  )}
                />

                <div className="teamName" bis_skin_checked="1">
                  {matchDetails.player1.alias}
                </div>
              </a>
              {match.live == true ? (
                <div
                  className={
                    match.player1Score >= match.player2Score &&
                    match.completed == true
                      ? "won"
                      : "lost"
                  }
                >
                  {match.player1Score}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="timeAndEvent" bis_skin_checked="1">
            <div
              className="time"
              data-time-format="HH:mm"
              data-unix="1658103300000"
              bis_skin_checked="1"
            >
              {matchDetails.matchTime.hour}:{matchDetails.matchTime.minutes}
            </div>
            <div
              className="date"
              data-time-format="do 'of' MMMM y"
              data-unix="1658103300000"
              bis_skin_checked="1"
            >
              {matchDetails.matchTime.day}
              {matchDetails.matchTime.ordinal} of
              {matchDetails.matchTime.month} {matchDetails.matchTime.year}
            </div>
            <div className="event text-ellipsis" bis_skin_checked="1">
              <a
                href={`/event/${event.id}`}
                title={event.name}
                bis_skin_checked="1"
              >
                {event.name}
              </a>
            </div>
            <div className="text dummy-spacer" bis_skin_checked="1">
              &nbsp;
            </div>
            <div
              className={`countdown ${
                match.live == true && match.completed == false
                  ? "countdown-live"
                  : ""
              }`}
              bis_skin_checked="1"
            >
              {match.completed == true
                ? "Match over"
                : match.live == true
                ? "LIVE"
                : matchDetails.countdown}
            </div>
          </div>
          <div className="team" bis_skin_checked="1">
            <img
              alt={matchDetails.player2.country}
              src={getCountryFlag(matchDetails.player2.country)}
              className="team2"
              title={matchDetails.player2.country}
            />
            <div className="team2-gradient" bis_skin_checked="1">
              <a
                href={`/player/${matchDetails.player1.alias}`}
                bis_skin_checked="1"
              >
                <img
                  alt={matchDetails.player2.alias}
                  className="logo"
                  title={matchDetails.player2.alias}
                  height="60px"
                  width="120px"
                  src={module.getPlayerPhoto(
                    Info.PlayerDetails,
                    matchDetails.player2.id,
                  )}
                />
                <div className="teamName" bis_skin_checked="1">
                  {matchDetails.player2.alias}
                </div>
              </a>
              {match.live == true ? (
                <div
                  className={
                    match.player1Score >= match.player2Score &&
                    match.completed == true
                      ? "won"
                      : "lost"
                  }
                >
                  {match.player2Score}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>,
      );
      const interval = setInterval(
        () =>
          setTime(function () {
            if (Date.now() <= new Date(match.dateTime)) {
              return Date.now();
            }
          }),
        1000,
      );
      return () => {
        clearInterval(interval);
      };
    }
  }, [Info, time]);

  return Render;
};
export default MatchTable;
