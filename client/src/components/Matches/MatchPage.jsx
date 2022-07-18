import { useState, useEffect, useParams } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import MatchTable from "./MatchTable";
import Scores from "./Scores";

const MatchPage = () => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios("http://localhost:3001/");
      setInfo(response.data);
    };
    getInfo();
  }, []);

  useEffect(() => {
    if (Info != undefined) {
      setRender(
        <div>
          <div>
            <MatchTable Info={Info} />
          </div>
          <div>
            <Scores info={Info} />
          </div>
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default MatchPage;
