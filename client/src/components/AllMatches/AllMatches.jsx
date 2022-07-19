import { useState, useEffect, startTransition } from "react";
import * as module from "../infoFunctions";
import axios from "axios";
import MatchCells from "./MatchCells";
import EventTable from "./EventTable";

const AllMatches = () => {
  const [Info, setInfo] = useState();
  const [Render, setRender] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/").then((response) => {
      setInfo(response.data);
    });
  }, []);

  useEffect(() => {
    if (Info != undefined) {
      setRender(
        <div className="newMatches">
          {/* <EventTable Info={Info} /> */}
          <MatchCells info={Info} />
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default AllMatches;
