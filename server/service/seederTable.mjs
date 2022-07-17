import db from "../models/index.mjs";
import { Info } from "./info.mjs";
import { permissionCheck } from "./permissionCheck.mjs";

export const closeQualification = async (request) => {
  let answer;
  await Info().then((info) => {
    permissionCheck(userId, editionId, "Events", info) == false
      ? (answer = { accepted: false, reason: "Insufficent permission" })
      : db.Seeder.update({
          open: false,
          where: {
            id: seederId,
          },
        }).then((result) => (answer = result));
  });
  return answer;
};

export const finaliseList = (seederId) => {
  db.finaliseList.update({
    finalised: true,
    where: {
      id: seederId,
    },
  });
};

export const openQualification = (seederId) => {
  db.Seeder.update({
    open: true,
    where: {
      id: seederId,
    },
  });
};
