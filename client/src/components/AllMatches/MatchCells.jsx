import React, { useState, Component, useEffect } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import axios from "axios";
import * as module from "../infoFunctions";

const MatchCells = ({ info }) => {
  const Info = info;

  //render upcoming matches cells
  const LiveCells = () => {
    const upcomingMatches = Info.Matches.filter((match) => {
      return match.Live == false && match.Completed == false;
    });
    const cellDetails = {};
    const RenderCells = [];
    upcomingMatches.forEach((match) => {
      // module.getPlayeralias(Info,playerId)
      const matchDetails = {
        matchId: match.id,
        bestOf: match.BestOf,
        matchTime: module.getTimeObj(new Date(match.dateTime)),
        player1: module.getPlayer(Info.PlayerDetails, match.player1Id),
        player2: module.getPlayer(Info.PlayerDetails, match.player2Id),
        event: module.getEvent(Info.Events, match.eventId),
      };

      const date = `${matchDetails.matchTime.dayName} ${matchDetails.matchTime.month}-${matchDetails.matchTime.day}-${matchDetails.matchTime.year}`;

      if (cellDetails[date] == undefined) {
        cellDetails[date] = [];
      }
      cellDetails[date].push(matchDetails);
    });

    for (let date in cellDetails) {
      let cells = [];
      cellDetails[date].forEach((matchDetails) => {
        cells.push(
          <div className="upcomingMatch removeBackground" bis_skin_checked="1">
            <a
              href={`/match/?matches=${matchDetails.matchId}`}
              className="match a-reset"
              bis_skin_checked="1"
            >
              <div className="matchInfo" bis_skin_checked="1">
                <div className="matchTime" bis_skin_checked="1">
                  {`${matchDetails.matchTime.hour}:${matchDetails.matchTime.minutes}`}
                </div>
                <div className="matchMeta" bis_skin_checked="1">
                  bo{matchDetails.bestOf}
                </div>
              </div>
              <div className="matchTeams text-ellipsis" bis_skin_checked="1">
                <div className="matchTeam team1" bis_skin_checked="1">
                  <div className="matchTeamLogoContainer" bis_skin_checked="1">
                    <img
                      alt={matchDetails.player1.alias}
                      className="matchTeamLogo"
                      title={matchDetails.player1.alias}
                      src={module.getPlayerPhoto(
                        Info.PlayerDetails,
                        matchDetails.player1.id,
                      )}
                    />
                  </div>
                  <div
                    className="matchTeamName text-ellipsis"
                    bis_skin_checked="1"
                  >
                    {matchDetails.player1.alias}
                  </div>
                </div>
                <div className="matchTeam team2" bis_skin_checked="1">
                  <div className="team text-ellipsis" bis_skin_checked="1">
                    {matchDetails.player2.alias}
                  </div>
                </div>
              </div>
              <div className="matchEvent" bis_skin_checked="1">
                <div className="matchEventLogoContainer" bis_skin_checked="1">
                  <img
                    alt={matchDetails.event.name}
                    className="matchEventLogo"
                    title={matchDetails.event.name}
                    src="https://img-cdn.hltv.org/eventlogo/rRntRkBOKXzHoiJq6Tuk-c.png?ixlib=java-2.1.0&amp;w=50&amp;s=37fc6e5707ac02ad52fc76df4a5dc5bb"
                  />
                </div>
                <div
                  className="matchEventName gtSmartphone-only"
                  bis_skin_checked="1"
                >
                  {matchDetails.event.name}
                </div>
              </div>
            </a>
          </div>,
        );
      });
      RenderCells.push([
        <div>
          <div>{date}</div>
          <div>{cells}</div>
        </div>,
      ]);
    }
  };

  //render live matches cells
  const UpcomingCells = () => {
    const emptyPlayer = {
      id: null,
      userId: null,
      elo: null,
      photo: null,
      firstName: null,
      lastName: null,
      alias: "null",
      birthdate: null,
      homeTown: null,
      profile: null,
      country: "USA",
      state: null,
      playstyle: null,
      pb: null,
    };
    const emptyEvent = {
      id: 267,
      editionId: 1,
      permissionId: 1,
      name: null,
      location: null,
      country: null,
      startDate: "2021-07-20T12:00:00.000Z",
      endDate: "2021-07-20T12:00:00.000Z",
      timezone: null,
      ongoing: true,
      concluded: true,
      importance: 0,
      playerCount: null,
      tournamentStructure: null,
      seedingMethod: 1,
      prizeCash: null,
      prizeOther: null,
      versionId: null,
    };
    const liveMatches = Info.Matches.filter((match) => {
      return match.live == true && match.completed == false;
    });
    const cellDetails = {};
    const RenderCells = [];
    liveMatches.forEach((match) => {
      // module.getPlayeralias(Info,playerId)
      const matchDetails = {
        matchId: match.id,
        bestOf: match.bestOf,
        matchTime: module.getTimeObj(new Date(match.dateTime)),
        player1:
          module.getPlayer(Info.PlayerDetails, match.player1Id) == undefined
            ? emptyPlayer
            : module.getPlayer(Info.PlayerDetails, match.player1Id),
        player2:
          module.getPlayer(Info.PlayerDetails, match.player2Id) == undefined
            ? emptyPlayer
            : module.getPlayer(Info.PlayerDetails, match.player2Id),
        event:
          module.getEvent(Info.Events, match.eventId) == undefined
            ? emptyEvent
            : module.getEvent(Info.Events, match.eventId),
      };

      RenderCells.push(
        <div className="liveMatch-container" bis_skin_checked="1">
          <div
            className="liveMatch"
            data-livescore-match="2357152"
            bis_skin_checked="1"
          >
            <a
              href={`/match/?matches=${matchDetails.matchId}`}
              className="match a-reset"
              bis_skin_checked="1"
            >
              <div className="matchInfo" bis_skin_checked="1">
                <div className="matchTime matchLive" bis_skin_checked="1">
                  LIVE
                </div>
                <div className="matchMeta" bis_skin_checked="1">
                  bo{matchDetails.bestOf}
                </div>
              </div>
              <div className="matchTeams text-ellipsis" bis_skin_checked="1">
                <div className="matchTeam" bis_skin_checked="1">
                  <div className="matchTeamLogoContainer" bis_skin_checked="1">
                    <img
                      alt={matchDetails.player1.alias}
                      className="matchTeamLogo"
                      title={matchDetails.player1.alias}
                      src={`http://localhost:3001/${module.getPlayerFlag(
                        matchDetails.player1,
                      )}`}
                    />
                  </div>
                  <div
                    className="matchTeamName text-ellipsis"
                    bis_skin_checked="1"
                  >
                    {matchDetails.player1.alias}
                  </div>
                  <div className="matchTeamScore" bis_skin_checked="1">
                    <span className="currentMapScore trailing">
                      {match.player1Score}
                    </span>
                  </div>
                </div>
                <div className="matchTeam" bis_skin_checked="1">
                  <div className="matchTeamLogoContainer" bis_skin_checked="1">
                    <img
                      alt={matchDetails.player2.alias}
                      className="matchTeamLogo"
                      title={matchDetails.player2.alias}
                      src={`http://localhost:3001/${module.getPlayerFlag(
                        matchDetails.player2,
                      )}`}
                    />
                  </div>
                  <div
                    className="matchTeamName text-ellipsis"
                    bis_skin_checked="1"
                  >
                    {matchDetails.player2.alias}
                  </div>
                  <div className="matchTeamScore" bis_skin_checked="1">
                    <span className="currentMapScore leading">
                      {match.player2Score}
                    </span>
                  </div>
                </div>
              </div>
              <div className="matchEvent " bis_skin_checked="1">
                <div className="matchEventLogoContainer" bis_skin_checked="1">
                  <img
                    alt={matchDetails.event.name}
                    className="matchEventLogo day-only"
                    title={matchDetails.event.name}
                    src={`http://localhost:3001/flags`}
                  />
                </div>
                <div
                  className="matchEventName gtSmartphone-only"
                  bis_skin_checked="1"
                >
                  {matchDetails.event.name}
                </div>
              </div>
            </a>
          </div>
        </div>,
      );
    });
  };

  return [
    <div>
      <div>
        <div>Live Matches</div>
        <div>{LiveCells()}</div>
      </div>
      <div>
        <div>Upcoming Matches</div>
        <div>{UpcomingCells()}</div>
      </div>
    </div>,
  ];
};

export default MatchCells;
