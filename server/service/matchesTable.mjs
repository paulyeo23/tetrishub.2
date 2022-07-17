import db from "../models/index.mjs";

export const startGame = (matchId) => {
  db.Matches.update({
    live: true,
    where: {
      matchId: matchId,
    },
  });
};

export const updateScore = () => {
  db.Matches.update({
    live: true,
    where: {
      matchId: matchId,
    },
  });
};

export const addStreamer = (matchId, streamAddress) => {
  db.Streams.create({
    matchId: matchId,
    streamAddress: streamAddress,
  });
};

export const removeStreamer = (streamId) => {
  db.Streams.create({
    id: streamId,
  });
};

export const addReplay = (matchId, streamAddress) => {
  db.Streams.create({
    id: streamId,
  });
};
