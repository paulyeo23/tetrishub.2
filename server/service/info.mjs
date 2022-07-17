import db from "../models/index.mjs";

export const Info = async () => {
  return {
    Users: await db.Users.findAll(),
    PlayerDetails: await db.PlayerDetails.findAll(),
    Events: await db.Events.findAll(),
    Matches: await db.Matches.findAll(),
    Streams: await db.Streams.findAll(),
    QualifyingScores: await db.QualifyingScores.findAll(),
    Permissions: db.Permissions.findAll(),
    Brackets: await db.Brackets.findAll(),
    BracketMatches: await db.BracketMatches.findAll(),
    BracketTypes: await db.BracketTypes.findAll(),
    Editions: await db.Editions.findAll(),
    Organisations: await db.Organisations.findAll(),
    Series: await db.Series.findAll(),
    SeedingMethod: await db.SeedingMethod.findAll(),
    Seeder: await db.Seeder.findAll(),
    PlayerSeed: await db.PlayerSeed.findAll(),
    Organisation: await db.Organisations.findAll(),
    PinnedEvents: await db.PinnedEvents.findAll(),
    Versions: await db.Versions.findAll(),
    Announcements: await db.Announcements.findAll(),
    Forums: await db.Forums.findAll(),
    Threads: await db.Threads.findAll(),
    Comments: await db.Comments.findAll(),
    Admins: await db.Admins.findAll(),
  };
};
