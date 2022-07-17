import React, { useState, Component, useEffect } from "react";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import axios from "axios";
import * as module from "../infoFunctions";

const MatchCells = ({ Info }) => {
  let Render;

  const liveMatches = Info.Matches.filter((match) => {
    return match.live == true && match.completed == false;
  });
  const cells = [];
  liveMatches.forEach((match) => {
    // module.getPlayerAlias(Info,playerId)
    const cellDetails = {
      matchTime: module.getTimeObj(new Date(match.dateTime)),
      player1: module.getPlayer(Info.PlayerDetails, match.player1Id),
      player2: module.getPlayer(Info.PlayerDetails, match.player2Id),
      event: module.getEvent(Info.Events, match.eventId),
    };

    cells.push(
      <div className="liveMatch" bis_skin_checked="1">
        <a
          href={`/matches/${match.id}`}
          className="match a-reset"
          bis_skin_checked="1"
        >
          <div className="matchInfo" bis_skin_checked="1">
            <div className="matchTime matchLive" bis_skin_checked="1">
              LIVE
            </div>
            <div className="matchRating matchLive" bis_skin_checked="1">
              <i className="fa fa-star faded"></i>
              <i className="fa fa-star faded"></i>
              <i className="fa fa-star faded"></i>
              <i className="fa fa-star faded"></i>
              <i className="fa fa-star faded"></i>
            </div>
            <div className="matchMeta" bis_skin_checked="1">
              {match.bestOf}
            </div>
          </div>
          <div className="matchTeams text-ellipsis" bis_skin_checked="1">
            <div className="matchTeam" bis_skin_checked="1">
              <div className="matchTeamLogoContainer" bis_skin_checked="1">
                <img
                  alt={cellDetails.player1.alias}
                  className="matchTeamLogo"
                  title={cellDetails.player1.alias}
                  src={module.getPlayerPhoto(
                    Info.PlayerDetails,
                    match.player1Id,
                  )}
                />
              </div>
              <div className="matchTeamName text-ellipsis" bis_skin_checked="1">
                {cellDetails.player1.alias}
              </div>
              <div className="matchTeamScore" bis_skin_checked="1">
                <span
                  className={`currentMapScore ${
                    match.player1Score > match.player2Score
                      ? "leading"
                      : "trailing"
                  }
                  }`}
                >
                  {match.player1Score}
                </span>
              </div>
            </div>
            <div className="matchTeam" bis_skin_checked="1">
              <div className="matchTeamLogoContainer" bis_skin_checked="1">
                <img
                  alt="Arvum"
                  className="matchTeamLogo day-only"
                  title="Arvum"
                  src={module.getPlayerPhoto(
                    Info.PlayerDetails,
                    match.player2Id,
                  )}
                />
              </div>
              <div className="matchTeamName text-ellipsis" bis_skin_checked="1">
                {cellDetails.player2.alias}
              </div>
              <div className="matchTeamScore" bis_skin_checked="1">
                <span
                  className="currentMapScore leading"
                  data-livescore-current-map-score=""
                  data-livescore-team="11773"
                >
                  {match.player2Score}
                </span>
              </div>
            </div>
          </div>
          <div className="matchEvent " bis_skin_checked="1">
            <div className="matchEventLogoContainer" bis_skin_checked="1">
              <img
                alt={module.getEventName(Info.Events, match.eventId)}
                className="matchEventLogo"
                title={module.getEventName(Info.Events, match.eventId)}
                src="https://img-cdn.hltv.org/eventlogo/NXRVcPDMcDw7Zd1mPWitL4.png?ixlib=java-2.1.0&amp;w=50&amp;s=efe31ee3c1de397f0489052fe590b9b6"
              />
            </div>
          </div>
        </a>
      </div>,
    );
  });

  return Render;
};

export default MatchCells;
