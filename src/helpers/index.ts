import { createSchemaOfEnemyShips } from "./createScemaOfEnemyShips.ts";
import { getAttackedCoordinates } from "./getAttackedCoordinates.ts";
import { generateIdx } from "./generateIdx.ts";
import { handleTerminationSignals } from "./handleTerminationSignals.ts";
import {
  sendToAllClients,
  sendToClient,
  sendToRoomClients,
  sendDataToAdjiacentCell,
} from "./sendData.ts";
import { updateWinnersData } from "./updateWinnersData.ts";
import { changeTurn } from "./changeTurn.ts";
import { getRoomConnections } from "./getRoomConnections.ts";

export {
  createSchemaOfEnemyShips,
  getAttackedCoordinates,
  generateIdx,
  handleTerminationSignals,
  sendDataToAdjiacentCell,
  sendToAllClients,
  sendToClient,
  sendToRoomClients,
  updateWinnersData,
  changeTurn,
  getRoomConnections,
};
