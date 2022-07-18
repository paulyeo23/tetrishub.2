import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";
import TopEloRank from "./TopEloRank";
import UpcomingEvents from "./UpcomingEvents";

const LeftCol = () => {
  const [Info, setInfo] = useState();
  const [Render, setRender] = useState();

  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });
  }, []);

  useEffect(() => {
    if (Info != undefined) {
      setRender(
        <div className="leftCol">
          <TopEloRank Info={Info} />
          <UpcomingEvents Info={Info} />
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default LeftCol;
