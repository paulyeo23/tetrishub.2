import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";

const TopEloRank = ({ Info }) => {
  let Render = [];
  const limit = 5;
  let tempRender = [];

  const topElo = Info.PlayerDetails.sort((a, b) => {
    return b.elo - a.elo;
  }).slice(0, limit);

  for (let i = 0; i < limit; i++) {
    let player = topElo[i];
    tempRender.push(
      <div className="col-box rank" bis_skin_checked="1">
        <a href="/ranking/teams" className="rankNum" bis_skin_checked="1">
          {`${i + 1}.`}
        </a>
        <img
          alt={player.alias}
          className="teamImg"
          title={player.alias}
          src={module.getPlayerPhoto(Info.PlayerDetails, player.id)}
        />
        <a
          href={`/profile/${player.alias}`}
          className="text-ellipsis"
          bis_skin_checked="1"
        >
          {player.alias}
        </a>
      </div>,
    );
  }
  Render = [
    <aside>
      <div className="ranking-row" bis_skin_checked="1">
        <h1>
          <a
            href="/rankings/"
            className="a-reset"
            style={{ paddingLeft: "5px" }}
            bis_skin_checked="1"
          >
            RANKING BY
          </a>
        </h1>
      </div>
      <div className="col-box-con">{tempRender}</div>
    </aside>,
  ];

  return Render;
};

export default TopEloRank;
