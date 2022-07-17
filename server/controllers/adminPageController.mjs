import { getAdmin, addAdmin, removeAdmin } from "../service/adminTable.mjs";

export function initAdminsController() {
  const GetAdmin = (request, response) => {
    return getAdmin();
  };

  const AddAdmin = (request, response) => {
    const userId = request.body.userId;
    const permissionId = request.body.permissionid;
    return addAdmin(userId, permissionId);
  };

  const RemoveAdmin = (request, response) => {
    const adminId = request.body.userId;
    return removeAdmin(adminId);
  };

  return {
    GetAdmin,
    AddAdmin,
    RemoveAdmin,
  };
}

import { getAdmin, addAdmin, removeAdmin } from "../service/adminTable.mjs";

export function initAdminsController() {
  const GetAdmin = (request, response) => {
    response.send(getAdmin());
  };

  const AddAdmin = (request, response) => {
    const userId = request.body.userId;
    const permissionId = request.body.permissionid;
    response.send(addAdmin(userId, permissionId));
  };

  const RemoveAdmin = (request, response) => {
    const adminId = request.body.userId;
    response.send(removeAdmin(adminId));
  };

  return {
    GetAdmin,
    AddAdmin,
    RemoveAdmin,
  };
}
