import { useState, useEffect } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useParams } from "react-router-dom";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";
import EventHeader from "./EventHeader";
import TourneyBrackets from "./bracketstest";

const Seeds = ({ Info, eventId }) => {
  const [Render, setRender] = useState();
  const [PlayerQualifer, setPlayerQualifer] = useState();

  function watchQualifer(e) {
    console.log(e.target);
    setPlayerQualifer(e.target.videoLink);
  }

  function linkToEmbed(videoLink) {
    const VideoLinkSplit = videoLink.split("/");
    const videoId = VideoLinkSplit[VideoLinkSplit.length - 1];
    return `https://player.twitch.tv/?video=${videoId}&parent=localhost`;
  }

  useEffect(() => {
    let RenderCells = [];
    const Seeder = Info.Seeder.filter((seeder) => {
      return seeder.eventId == eventId;
    })[0];
    if (Seeder != undefined) {
      const allScores = Info.QualifyingScores.filter((score) => {
        return score.seederId == Seeder.id;
      });

      function numberWithCommas(x) {
        return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

      const uniquePlayers = [
        ...new Set(allScores.map((score) => score.playerId)),
      ];
      console.log(uniquePlayers);

      let seeds = [];

      uniquePlayers.forEach((playerId) => {
        const playerScores = allScores.filter((score) => {
          return score.playerId == playerId;
        });

        playerScores.sum = function (items, prop) {
          return items.reduce(function (a, b) {
            return a + b[prop];
          }, 0);
        };

        seeds.push({
          playerId: playerId,
          scores: playerScores,
          average: playerScores.sum(playerScores, "score") / Seeder.averageOf,
          link: linkToEmbed(playerScores[0].videoLink),
        });
      });

      let seedNumber = 1;
      seeds
        .sort((a, b) => {
          return b.average - a.average;
        })
        .forEach((seed) => {
          RenderCells.push(
            <div class="stats-row">
              <div>
                <span class="strong">{seedNumber}.</span>
                <a onClick={watchQualifer}>
                  <div videoLink={seed.link}></div>
                  <span>
                    {module.getPlayer(Info.PlayerDetails, seed.playerId).alias}
                  </span>
                </a>
              </div>
              <span>{numberWithCommas(Math.ceil(seed.average))}</span>
            </div>,
          );
          seedNumber += 1;
        });

      setRender(
        <div className="stats-section stats-player ">
          <div class="standard-headline" bis_skin_checked="1">
            Seeds
          </div>
          <div className="columns">
            <div className="col stats-rows standard-box">
              {RenderCells.slice(0, Math.ceil(RenderCells.length / 2))}
            </div>
            <div className="col stats-rows standard-box">
              {RenderCells.slice(
                Math.ceil(RenderCells.length / 2),
                RenderCells.length,
              )}
            </div>
          </div>
          <div className="Layout-sc-nxg1ff-0 dsNYYo video-player__container"></div>
        </div>,
      );
    }
  }, [PlayerQualifer]);
  return Render;
};
export default Seeds;
