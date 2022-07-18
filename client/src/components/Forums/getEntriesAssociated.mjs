const Heirarchy = [
  {
    level: 1,
    table: "Forums",
    foreignKey: "",
  },
  {
    level: 2,
    table: "Threads",
    foreignKey: "forumsId",
  },
  {
    level: 3,
    table: "Comments",
    foreignKey: "threadsId",
  },
].sort((a, b) => {
  return b.level - a.level;
});

export const getEntriesAssociated = (table, tableEntry, info) => {
  let dates = {};
  Heirarchy.forEach((heirarchy) => {
    dates[heirarchy.table] = [];
  });
  dates[table].push(tableEntry);

  const currentLevel = Heirarchy.filter((heirarchy) => {
    return heirarchy.table == table;
  })[0].level;
  const maxLevel = Heirarchy[Heirarchy.length - 1].level;

  for (let i = currentLevel; i < maxLevel; i++) {
    let currentHeirarchy = Heirarchy.filter((heirarchy) => {
      return heirarchy.level == i;
    })[0];
    let nextHeirarchy = Heirarchy.filter((heirarchy) => {
      return heirarchy.level == i + 1;
    })[0];

    dates[currentHeirarchy.table].forEach((date) => {
      dates[nextHeirarchy.table].push(
        info[nextHeirarchy.table].filter((entries) => {
          return entries[nextHeirarchy.foreignKey] == date.id;
        }),
      );
    });
  }
  return dates;
};

export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return "A few seconds";
}