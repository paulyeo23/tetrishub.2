import db from "../../models/index.mjs";

export const createSeries = (name, orgId, permissionId) => {
  db.Series.create({
    name: name,
    orgId: orgId,
    permissionId: permissionId,
  });
};

export const deleteSeries = (seriesId) => {
  db.Series.destroy({
    where: { id: seriesId },
  });
};

export const updateSeries = (seriesId, name, orgId) => {
  db.Series.update({
    name: name,
    orgId: orgId,
    where: {
      id: seriesId,
    },
  });
};
