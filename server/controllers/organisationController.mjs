import { createAdmin, deleteAdmin } from "../service/adminTable.mjs";
import { Info } from "../service/info.mjs";

import { createSeries, deleteSeries } from "../service/seriesTable.mjs";
import { getPermissions } from "../../service/permissionsTable.mjs";

export default function initOrganisationController() {
  const removeSeries = async (request, response) => {
    const seriesId = request.body.seriesId;
    deleteSeries(seriesId);
  };

  return {
    registerOrganisation,
    addAdmin,
    removeAdmin,
    addSeries,
    removeSeries,
  };
}
