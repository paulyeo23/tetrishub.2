import { response } from "express";
import {
  topElos,
  upcomingEvents,
} from "../../service/sidetables/leftSideTables.mjs";
import {
  recentActivity,
  recentMatches,
} from "../../service/sidetables/rightSideTables.mjs";

export function initSideTablesController() {
  const rightSideTables = async (request, response) => {
    response.send({
      recentMatches: await recentMatches(),
      recentActivity: await recentActivity(),
    });
  };

  const leftSideTables = async (request, response) => {
    response.send({
      PlayerDetails: await topElos(),
      Events: await upcomingEvents(),
    });
  };

  return {
    leftSideTables,
    rightSideTables,
  };
}
