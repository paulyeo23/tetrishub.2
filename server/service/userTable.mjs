import db from "../models/index.mjs";

export const login = (username, password) => {
  return db.Users.findOne({
    where: {
      username: username,
      password: password,
    },
  });
};

export const register = async (username, password, country) => {
  let status;
  await db.Users.findAll({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user.length == 0) {
      db.Users.create({
        username: username,
        displayName: username,
        password: password,
        country: country,
      }).then((result) => {
        db.PlayerDetails.create({
          alias: username,
          elo: 0,
          userId: result.id,
        });
      });
      status = { accepted: true };
    } else {
      status = { accepted: false };
    }
  });

  return status;
};
