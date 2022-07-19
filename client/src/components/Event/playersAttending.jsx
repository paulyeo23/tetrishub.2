import { useState, useEffect, startTransition } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import { getCountryFlag } from "../Matches/coutnryflags.mjs";

const PlayersAttending = ({ Info, eventId }) => {
  const [Render, setRender] = useState([]);
  function click() {
    alert("test");
  }
  useEffect(() => {
    console.log(Info.Seeder);
    const Seeder = Info.Seeder.filter((seeder) => {
      return seeder.eventId == eventId;
    })[0];

    if (Seeder != undefined) {
      const allScores = Info.QualifyingScores.filter((score) => {
        return score.seederId == Seeder.id;
      });

      const uniquePlayers = [
        ...new Set(allScores.map((score) => score.playerId)),
      ];
      let tempRender = [];
      uniquePlayers.forEach((playerId) => {
        let AllMatches = Info.Matches.filter((match) => {
          return match.player1Id == playerId || match.player2Id == playerId;
        });
        let player = module.getPlayer(Info.PlayerDetails, playerId);
        tempRender.push(
          <div class="top-x-box standard-box" bis_skin_checked="1">
            <div class="playerPicture" bis_skin_checked="1">
              <img
                alt={player.alias}
                class="img"
                title={player.alias}
                src={module.getPlayerPhoto(Info.PlayerDetails, player.id)}
              />
            </div>
            <img
              alt={player.country}
              src={getCountryFlag(player.country)}
              class="country gtSmartphone-only flag"
              title={player.country}
            />
            <a
              href={player.alias}
              class="name"
              data-tooltip-id="uniqueTooltipId-1940241417"
              bis_skin_checked="1"
            >
              {player.alias}
            </a>
            <div
              class="hidden"
              id="uniqueTooltipId-1940241417"
              bis_skin_checked="1"
            >
              <div class="stats-section context-tooltip" bis_skin_checked="1">
                <a
                  href={`/player/${player.alias}`}
                  class="context-button"
                  bis_skin_checked="1"
                ></a>
              </div>
            </div>
            <div class="flex-placeholder" bis_skin_checked="1"></div>{" "}
            <div class="rating">
              <span class="bold">{player.elo}</span>
              <br />
              Elo
            </div>
            <div class="average gtSmartphone-only">
              <span class="bold">{AllMatches.length}</span>
              <br />
              Games
            </div>
          </div>,
        );
      });

      setRender(
        <div className="stats-section">
          <div className="columns">
            <div className="col">
              <div class="standard-headline" bis_skin_checked="1">
                Players Attending
              </div>
              {tempRender.slice(0, Math.ceil(tempRender.length / 2))}
            </div>
            <div className="col">
              <div class="standard-headline" bis_skin_checked="1">
                Players Attending
              </div>
              {tempRender.slice(
                Math.ceil(tempRender.length / 2),
                tempRender.length,
              )}
            </div>
          </div>
          ,
        </div>,
      );
    }
  }, [Info]);

  return Render;
};

export default PlayersAttending;
