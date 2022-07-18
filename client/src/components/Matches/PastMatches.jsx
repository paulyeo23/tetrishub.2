import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import { getCountryFlag } from "./coutnryflags.mjs";

const PastMatches = ({ Info, player, matchDate }) => {
  const [Render, setRender] = useState();
  let pastLimit = -90;

  const day = 1000 * 60 * 60 * 24;

  useEffect(() => {
    let Cells = [];
    const playerMatches = Info.Matches.filter((match) => {
      return (
        new Date(match.dateTime) >=
        module.addDays(new Date(matchDate), pastLimit)
      );
    }).filter((match) => {
      return match.player1Id == player.id || match.player2Id == player.id;
    });

    playerMatches.forEach((match) => {
      let daysAgo = new Date(match.dateTime) / day;
      let scores = {
        player:
          player.id == player1Id ? match.player1Score : match.player2Score,
        opponent:
          player.id == player2Id ? match.player1Score : match.player2Score,
      };

      let opponent = {
        player:
          match.player1Id == player.id
            ? module.getPlayer(Info.PlayerDetails, match.player2Id)
            : module.getPlayer(Info.PlayerDetails, match.player1Id),
        score: match.player1Id == player.id ? match.player2Id : match.player1Id,
      };
      Cells.push(
        <tr className="">
          <td className="past-matches-team text-ellipsis">
            <div className="past-matches-name-time" bis_skin_checked="1">
              <div
                className="past-matches-cell past-matches-teamname text-ellipsis"
                bis_skin_checked="1"
              >
                <span className="text-ellipsis">
                  <img
                    alt={opponent.player.country}
                    src={module.getPlayerFlag(opponent.player)}
                    className="flag flag"
                    title={opponent.player.country}
                  />
                  <a
                    href={`/player/${opponent.player.id}`}
                    className="text-ellipsis"
                    bis_skin_checked="1"
                  ></a>
                </span>
              </div>
              <div
                className="past-matches-cell past-matches-time-ago"
                bis_skin_checked="1"
              >
                {daysAgo <= 1
                  ? "Less than a day ago"
                  : daysAgo > 1 && daysAgo <= 14
                  ? "A week ago"
                  : daysAgo > 14 && daysAgo <= 30
                  ? `${Math.floor(daysAgo / 7)} weeks ago`
                  : "More than 1 month ago"}
              </div>
            </div>
          </td>
          <td className="past-matches-score">
            <a
              href="/matches/2357321/websterz-vs-rare-atom-esl-challenger-melbourne-2022-europe-open-qualifier-2"
              className={`past-matches-cell ${
                scores.player < scores.opponent ? "lost" : ""
              }`}
              bis_skin_checked="1"
            >
              {scores.player} - {scores.opponent}
            </a>
          </td>
        </tr>,
      );
    });
    setRender(
      <div className="past-matches-box text-ellipsis">
        <div className="past-matches-headline">
          <div class="past-matches-teamname text-ellipsis" bis_skin_checked="1">
            <img
              alt={player.country}
              src={module.getPlayerFlag(player)}
              class="flag flag"
              title={player.country}
            />
            <a href="/player/${player.alias}/" bis_skin_checked="1">
              {player.alias}
            </a>
          </div>
        </div>
      </div>,
    );
  }, [Info]);
  return Render;
};
export default PastMatches;
