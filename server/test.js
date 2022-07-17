function stringToDate(Dates) {
  let list = Dates.split(" ");
  let date = list[0].split("/");
  let time = list[1].split(":");
  return new Date(date[2], date[1], date[0], time[0], time[1]);
}

function eventId(eventName, Events) {
  let answer = Events.filter((event) => {
    return event.name == eventName;
  })[0];
  answer == undefined ? (answer = null) : (answer = answer.id);
  return answer;
}

function playerId(playerAlias, playerList) {
  let answer = playerList.filter((player) => {
    return player.alias == playerAlias;
  })[0];
  answer == undefined ? (answer = null) : (answer = answer.id);
  return answer;
}

function Matches(matchList, playerList, Events) {
  let tempList = [];
  matchList.forEach((x) => {
    tempList.push({
      dateTime: stringToDate(x.dateTime),
      bestOf:
        x.player1Score >= x.player2Score
          ? x.player1Score * 2 - 1
          : x.player2Score * 2 - 1,
      player1Id: playerId(x.player1Id, playerList),
      player1Score: x.player1Score,
      player2Id: playerId(x.player2Id, playerList),
      player2Score: x.player2Score,
      winnerId:
        x.player1Score > x.player2Score ? x.player1Score : x.player2Score,
      loserId:
        x.player1Score > x.player2Score ? x.player1Score : x.player2Score,
      versionId: 1,
      live: true,
      completed: true,
      eventId: eventId(`${x.Event} ${x.Edition}`, Events),
      draw: x.player1Score == x.player2Score,
    });
  });
  return tempList;
}
