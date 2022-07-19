import { useState, useEffect } from "react";
import axios from "axios";
import * as module from "../infoFunctions";
import { useSearchParams } from "react-router-dom";
import MatchTable from "./MatchTable";
import Scores from "./Scores";
import PastMatches from "./PastMatches";
import HeadToHeads from "./HeadtoHeads";
import { useParams } from "react-router-dom";
import { Container, Row, Alert, Button, Col } from "react-bootstrap";

const MatchPage = () => {
  const [Render, setRender] = useState([]);
  const [Info, setInfo] = useState();

  const { matchId } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      const response = await axios("http://localhost:3001/");
      setInfo(response.data);
    };
    getInfo();
  }, []);

  useEffect(() => {
    if (Info != undefined) {
      const match = Info.Matches.filter((match) => {
        return match.id == matchId;
      })[0];

      const player1 = Info.PlayerDetails.filter((player) => {
        return player.id == match.player1Id;
      })[0];
      const player2 = Info.PlayerDetails.filter((player) => {
        return player.id == match.player2Id;
      })[0];
      setRender(
        <div className="match-page">
          <div className="standard-box teamsBox">
            <MatchTable Info={Info} matchId={matchId} />
          </div>
          <div className="past-matches spoiler"></div>
          <div
            class="past-matches-header"
            id="past-matches"
            bis_skin_checked="1"
          >
            <span class="headline">Matches, past 3 months</span>
          </div>
          <div className="past-matches-grid">
            <Row>
              <Col>
  
                <PastMatches
                  Info={Info}
                  player={player1}
                  matchDate={new Date(match.dateTime)}
                />
              </Col>
              <Col>

                <PastMatches
                  Info={Info}
                  player={player2}
                  matchDate={new Date(match.dateTime)}
                />
              </Col>
            </Row>
          </div>

          <div class="section-spacer" bis_skin_checked="1"></div>
          <HeadToHeads Info={Info} player1={player1} player2={player2} />
        </div>,
      );
    }
  }, [Info]);
  return Render;
};

export default MatchPage;
