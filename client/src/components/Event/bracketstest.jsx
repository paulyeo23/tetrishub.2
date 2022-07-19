import React from "react";

import {
  SingleEliminationBracket,
  DoubleEliminationBracket,
  Match,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";

const TourneyBrackets = ({ Info, eventId }) => {
  //get bracket match primary key for specific winner
  const getBracketMatchId = (Info, bracketMatch) => {
    const BracketMatch = Info.BracketMatches.filter((BracketMatch) => {
      return (
        BracketMatch.winnerTo == bracketMatch.bracketMatchId &&
        BracketMatch.bracketId == bracketMatch.bracketId
      );
    });
  };

  const bracketId = Info.Brackets.filter((bracket) => {
    return bracket.eventId == eventId;
  })[0].id;

  function useWindowSize() {
    const isSSR = typeof window !== "undefined";
    const [windowSize, setWindowSize] = React.useState({
      width: isSSR ? 1200 : window.innerWidth,
      height: isSSR ? 800 : window.innerHeight,
    });

    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    React.useEffect(() => {
      window.addEventListener("resize", changeWindowSize);

      return () => {
        window.removeEventListener("resize", changeWindowSize);
      };
    }, []);

    return windowSize;
  }

  const getMatch = (Info, bracketMatch) => {
    return Info.Matches.filter((match) => {
      return match.bracketMatchId == bracketMatch.id;
    })[0];
  };

  const getPlayerAlias = (Info, playerId) => {
    return Info.PlayerDetails.filter((player) => {
      return player.id == playerId;
    })[0].alias;
  };

  const getSource = (Info, bracketMatch) => {
    const source = Info.BracketMatches.filter((Bracketmatch) => {
      return (
        (Bracketmatch.winnerTo == bracketMatch.id ||
          Bracketmatch.loserTo == bracketMatch.id) &&
        Bracketmatch.bracketId == bracketMatch.bracketId
      );
    });
    return source;
  };

  

  const generateBracket = (Info, bracketId) => {
    let renderMatches = { upper: [], lower: [] };
    const Bracket = Info.BracketMatches.filter((bracketMatches) => {
      return bracketMatches.bracketId == bracketId;
    });
    Bracket.forEach((bracketMatch) => {
      let match = getMatch(Info, bracketMatch);
      let sources = getSource(Info, bracketMatch);
      bracketMatch.winnerTo == null
        ? (sources = [{ bracketMatchId: 1 }, { bracketMatchId: 1 }])
        : (sources = sources);

      renderMatches[bracketMatch.loserTo != null ? "upper" : "lower"].push({
        id: bracketMatch.bracketMatchId, // Unique identifier of any kind
        name: `Match ${bracketMatch.bracketMatchId}`,
        nextMatchId: bracketMatch.winnerTo, // Id for the next match in upper bracket, if it's final match it must be null OR undefined
        nextLooserMatchId: bracketMatch.loserTo, // Id for the next match in lower bracket, if it's final match or a lower bracket match it must be null OR undefined
        startTime: "2021-05-30",
        state: match.completed == true ? "DONE" : "SCHEDULED", // 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | 'DONE' | 'SCORE_DONE' Only needed to decide walkovers and if teamNames are TBD (to be decided)
        participants: [
          {
            id: match.player1Id != null ? match.player1Id : null, // Unique identifier of any kind
            resultText:
              match.winnerId == null
                ? null
                : match.winnerId == match.player1Id
                ? "WON"
                : "LOST", // Any string works
            isWinner:
              match.winnerId == null ? null : match.winnerId == match.player1Id,
            status: match.completed == true ? "PLAYED" : null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name:
              match.player1Id == null
                ? `Winner/loser of ${sources[0].bracketMatchId}`
                : getPlayerAlias(Info, match.player1Id),
          },
          {
            id: match.player2Id != null ? match.player2Id : null, // Unique identifier of any kind
            resultText:
              match.winnerId == null
                ? null
                : match.winnerId == match.player2Id
                ? "WON"
                : "LOST", // Any string works
            isWinner:
              match.winnerId == null ? null : match.winnerId == match.player2Id,
            status: match.completed == true ? "PLAYED" : null, // 'PLAYED' | 'NO_SHOW' | 'WALK_OVER' | 'NO_PARTY' | null
            name:
              match.player2Id == null
                ? `Winner/loser of ${sources[1].bracketMatchId}`
                : getPlayerAlias(Info, match.player2Id),
          },
        ],
      });
    });
    return renderMatches;
  };

  const simpleDoubleFull = generateBracket(Info, bracketId);
  const dimensions = useWindowSize();
  const finalWidth = Math.max(dimensions.width - 50, 500);
  const finalHeight = Math.max(dimensions.height - 100, 500);

  //   const App = () => (
  //     <div>
  //       <DoubleElimBracketLeaderboard
  //         matches={simpleDoubleFull}
  //         matchComponent={Match}
  //         svgWrapper={({ children, ...props }) => (
  //           <StyledSvgViewer width={finalWidth} height={finalHeight} {...props}>
  //             {children}
  //           </StyledSvgViewer>
  //         )}
  //       />
  //     </div>
  //   );

  const DoubleElimination = () => (
    <DoubleEliminationBracket
      matches={simpleDoubleFull}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer width={800} height={1200} {...props}>
          {children}
        </SVGViewer>
      )}
    />
  );

  return DoubleElimination();
};
export default TourneyBrackets;
