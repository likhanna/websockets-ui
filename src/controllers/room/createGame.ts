import {
  ICreateGame,
  ICreatedGameData,
  TConnections,
} from "../../models/roomModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { WebSocket } from "ws";
import { generateIdx } from "../../helpers/generateIdx.ts";
import { sendToClient } from "../../helpers/sendData.ts";

export const createGame = (connections: TConnections) => {
  const idGame = generateIdx();
  for (const index in connections) {
    const socket: WebSocket = connections[index];
    const createdGameData: ICreatedGameData = {
      idGame,
      idPlayer: index,
    };
    const res: ICreateGame = {
      type: EResType.CREATE_GAME,
      data: JSON.stringify(createdGameData),
      id: 0,
    };
    sendToClient(socket, res);
  }
};
