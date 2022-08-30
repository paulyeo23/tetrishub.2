import db from "../../models/index.mjs";
import { Info } from "../info.mjs";

const permissionHierarchy = [
  { level: 1, table: "organisation" },
  { level: 2, table: "series", foreignkey: "orgId" },
  { level: 3, table: "editions", foreignkey: "series" },
  { level: 4, table: "events", foreignkey: "editionId" },
];

const permissionCheck = (userId, tableId, table, info) => {
  const permissionsUserHas = info.admins.filter((admin) => {
    return admin.userId == userId;
  });
  const hierarchyLevel = permissionHierarchy.filter((hierarchy) => {
    return (hierarchy.table = table);
  })[0].level;
  let permissionsNeeded = [];
  let foreignkey;
  for (let i = hierarchyLevel; i > 0; i--) {
    let currentHierarchy = permissionHierarchy.filter((heirarchy) => {
      return heirarchy.level == i;
    })[0];
    let currentTable = info[currentHierarchy.table].filter((table) => {
      return table.id == (foreignkey == undefined ? tableId : foreignkey);
    })[0];
    permissionsNeeded.push(currentTable.permissionId);
    foreignkey = currentTable[currentHierarchy.foreignkey];
  }
  const permissionsFound = permissionsUserHas.filter((permission) =>
    permissionsNeeded.includes(permission),
  );
  return permissionsFound.length > 0;
};

export const registerOrganisation = async (request) => {
  let answer;
  const form = request.body;
  const organisationInfo = {
    name: form.name,
    ownerId: form.ownerId,
    shortName: form.shortName,
    youtube: form.youtube,
    website: form.website,
    discord: form.discord,
    facebook: form.facebook,
    twitter: form.twitter,
    description: form.description,
    twitch: form.twitch,
  };
  await db.Organisations.findAll().then(async (info) => {
    const nameCheck = info.filter((organisation) => {
      organisation.name == organisationInfo.name;
    })[0];

    const shortNameCheck = info.filter((organisation) => {
      organisation.name == organisationInfo.name;
    })[0];

    nameCheck != undefined || shortNameCheck != undefined
      ? (answer = {
          accepted: false,
          nameCheck: nameCheck == undefined,
          shortNameCheck: shortNameCheck == undefined,
        })
      : await db.Permissions.create({
          Organisation: organisationInfo.name,
        }).then((permission) => {
          db.Organisations.create({
            name: organisationInfo.name,
            permissionId: permission.id,
            ownerId: organisationInfo.ownerId,
            shortName: organisationInfo.shortName,
            youtube: organisationInfo.youtube,
            website: organisationInfo.website,
            discord: organisationInfo.discord,
            facebook: organisationInfo.facebook,
            twitter: organisationInfo.twitter,
            description: organisationInfo.description,
            twitch: organisationInfo.twitch,
          }).then((results) => {
            answer = results;
          });
        });
  });
  return answer;
};

export const addAdmin = async (request) => {
  let answer;
  const organisationId = request.params.organisationId;
  const ownerId = request.body.id;
  const userId = request.body.userId;
  const permissionId = request.body.userId;
  await db.Organisations.findAll().then((info) => {
    const organisation = info.filter((organisation) => {
      return organisation.id == organisationId;
    })[0];
    organisation == undefined
      ? (answer = {
          accepted: false,
          reason: "Organisation not found",
        })
      : organisation.ownerId != ownerId
      ? (answer = {
          accepted: false,
          reason: "Not organisation owner",
        })
      : db.Admins.create({
          userId: userId,
          permissionId: permissionId,
        }).then((results) => {
          answer = results;
        });
  });
  return answer;
};

export const deleteAdmin = async (request) => {
  let answer;
  const organisationId = request.params.organisationId;
  const ownerId = request.body.id;
  const permissionId = request.body.userId;
  await db.Organisations.findAll().then((organisations) => {
    const organisation = organisations.filter((organisation) => {
      return organisation.id == organisationId;
    })[0];
    organisation == undefined
      ? (answer = {
          accepted: false,
          reason: "Organisation not found",
        })
      : organisation.ownerId != ownerId
      ? (answer = {
          accepted: false,
          reason: "Not organisation owner",
        })
      : db.Admins.destroy({
          where: {
            id: permissionId,
          },
        }).then((results) => {
          answer = results;
        });
  });
  return answer;
};

export const addSeries = async (request) => {
  let answer;
  const userId = request.body.userId;
  const orgId = request.body.orgId;
  const seriesName = request.body.name;
  await Info().then((info) => {
    permissionCheck(userId, orgId, "Organisation", info) == false
      ? (answer = { accepted: false, reason: "Insufficient permission" })
      : info.Series.filter((series) => {
          return series.name == seriesName;
        }).length > 0
      ? (answer = { accepted: false, reason: "Name is already in use" })
      : db.Permissions.create({ name: `Series ${seriesName}` }).then(
          (permission) => {
            db.Series.create({
              name: seriesName,
              orgId: orgId,
              permissionId: permission.id,
            }).then((results) => {
              answer = results;
            });
          },
        );
  });
  return answer;
};

export const updateSeries = async (request) => {
  let answer;
  const seriesId = request.body.seriesId;
  const seriesName = request.body.name;
  const orgId = request.body.orgId;
  await Info().then((info) => {
    permissionCheck(userId, orgId, "Organisation", info) == false
      ? response.send({ accepted: false, reason: "Insufficient permission" })
      : info.Series.filter((series) => {
          return series.name == name;
        }).length > 0
      ? (answer = { accepted: false, reason: "Name is already in use" })
      : db.Permissions.update({
          name: `Series ${seriesName}`,
          where: { id: seriesId },
        }).then((results) => {
          answer = results;
        });
  });
  return answer;
};

export const addEdition = async (request) => {
  let answer;
  const userId = request.body.userId;
  const editionName = request.body.editionName;
  const seriesId = request.body.seriesId;
  await Info().then((info) => {
    permissionCheck(userId, seriesId, "Series", info) == false
      ? (answer = { accept: false, reason: "Insufficient Permission" })
      : db.Permissions.create({ name: `Edition ${editionName}` }).then(
          (permission) => {
            db.Editions.create({
              name: editionName,
              seriesId: seriesId,
              permissionId: permission.id,
            }).then((results) => {
              answer = results;
            });
          },
        );
  });
  return answer;
};

export const updateEdition = async (request) => {
  let answer;
  const seriesId = request.body.seriesId;
  const seriesName = request.body.name;
  const orgId = request.body.orgId;
  await Info().then((info) => {
    permissionCheck(userId, seriesId, "Series", info) == false
      ? (answer = { accepted: false, reason: "Insufficient permission" })
      : db.Series.update({
          name: seriesName,
          where: { id: seriesId },
        }).then((results) => {
          answer = results;
        });
  });
  return answer;
};

export const addEvent = async (request) => {
  let answer;
  const seriesId = request.body.seriesId;
  const eventName = request.body.name;
  const userId = request.body.userId;
  const orgId = request.body.orgId;
  const location = request.body.location;
  const country = request.body.country;
  const startDate = request.body.startDate;
  const endDate = request.body.endDate;
  const timezone = request.body.timezone;
  const playerCount = request.body.playerCount;
  const tournamentStructure = request.body.tournamentStructure;
  const seedingMethod = request.body.seedingMethod;
  const prizeCash = request.body.prizeCash;
  const prizeOther = request.body.prizeOther;
  const description = request.body.description;
  await Info().then((info) => {
    permissionCheck(userId, seriesId, "Series", info) == false
      ? (answer = { accepted: false, reason: "Insufficient permission" })
      : Info.Events.filter((event) => {
          return event.name == eventName;
        }).length > 0
      ? (answer = { accepted: false, reason: "Event name in use" })
      : db.Permissions.create({ name: `Event ${eventName}` }).then(
          (permission) => {
            db.Events.create({
              permissionId: permission.id,
              versionId: versionId,
              name: eventName,
              location: location,
              country: country,
              startdate: startDate,
              enddate: endDate,
              timezone: timezone,
              playerCount: playerCount,
              tournamentStructure: tournamentStructure,
              seedingMethod: seedingMethod,
              prizeCash: prizeCash,
              prizeOther: prizeOther,
            }).then((event) => {
              db.Seeder.create({
                eventId: event.id,
                description: description,
                averageOf: averageOf,
                seedingMethod: seedingMethod,
                open: open,
                finalised: finalised,
              });
            });
          },
        );
  });
  return answer;
};

export const updateEvent = async (request) => {
  let answer;
  const seriesId = request.body.seriesId;
  const eventName = request.body.name;
  const userId = request.body.userId;
  const orgId = request.body.orgId;
  const location = request.body.location;
  const country = request.body.country;
  const startDate = request.body.startDate;
  const endDate = request.body.endDate;
  const timezone = request.body.timezone;
  const playerCount = request.body.playerCount;
  const tournamentStructure = request.body.tournamentStructure;
  const seedingMethod = request.body.seedingMethod;
  const prizeCash = request.body.prizeCash;
  const prizeOther = request.body.prizeOther;
  await Info().then((info) => {
    permissionCheck(userId, seriesId, "Series", info) == false
      ? (answer = { accepted: false, reason: "Insufficient permission" })
      : Info.Events.filter((event) => {
          return event.name == eventName;
        }).length > 0
      ? (answer = { accepted: false, reason: "Event name in use" })
      : db.Events.update({
          versionId: versionId,
          name: eventName,
          location: location,
          country: country,
          startdate: startDate,
          enddate: endDate,
          timezone: timezone,
          playerCount: playerCount,
          tournamentStructure: tournamentStructure,
          seedingMethod: seedingMethod,
          prizeCash: prizeCash,
          prizeOther: prizeOther,
        }).then((result) => {
          answer = result;
        });
  });
  return answer;
};
