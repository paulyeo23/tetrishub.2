import { Row } from "react-bootstrap";
import { getPlayerFlag } from "../infoFunctions";

const LatestResults = ({ Info }) => {
  let Render = [];
  let tempRender = [];
  const limit = 5;
  let recentResults = Info.Matches.filter((match) => {
    return match.completed == true;
  }).sort((a, b) => {
    return new Date(b.dateTime) - new Date(a.dateTime);
  });
  for (let i = 0; i < limit; i++) {
    let match = recentResults[i];

    let player1 = Info.PlayerDetails.filter((playerdetail) => {
      return playerdetail.id == match.player1Id;
    })[0];
    let player2 = Info.PlayerDetails.filter((playerdetail) => {
      return playerdetail.id == match.player2Id;
    })[0];
    tempRender.push(
      <a
        href={`/match/${match.id}`}
        className="col-box a-reset"
        bis_skin_checked="1"
      >
        <div className="teambox" bis_skin_checked="1">
          <div className="teamrows" bis_skin_checked="1">
            <div className="teamrow" bis_skin_checked="1">
              <img
                alt={player1.country}
                src={getPlayerFlag(player1)}
                className="flag"
                title={player1.country}
              />
              <span className="team">{player1.alias}</span>
            </div>
            <div className="teamrow" bis_skin_checked="1">
              <img
                alt={player2.country}
                src={getPlayerFlag(player2)}
                className="flag"
                title={player2.country}
              />{" "}
              <span className="team">{player2.alias}</span>
            </div>
          </div>
          <div className="middleExtra" bis_skin_checked="1">
            <Row
              style={{
                color: `${
                  match.player1Score > match.player2Score
                    ? "#08a500"
                    : "#e40a0a"
                }`,
              }}
            >
              {match.player1Score}
            </Row>
            <Row
              style={{
                color: `${
                  match.player2Score > match.player1Score
                    ? "#08a500"
                    : "#e40a0a"
                }`,
              }}
            >
              {match.player2Score}
            </Row>
          </div>
        </div>
      </a>,
    );
  }

  Render = (
    <aside style={{ margin: "5px" }}>
      <h1>
        <a href="/results" class="a-reset" bis_skin_checked="1">
          LATEST RESULTS
        </a>
      </h1>
      <div className="col-box-con">{tempRender}</div>
    </aside>
  );
  return Render;
};
export default LatestResults;
