import { WebSocket } from "ws";
import { ICreateGame, ICreatedGameData } from "../../models/roomModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { TConnections } from "../../models/connections.ts";
import { generateIdx, sendToClient } from "../../helpers/index.ts";

export const createGame = (roomConnections: TConnections) => {
  const idGame = generateIdx();
  for (const index in roomConnections) {
    const socket: WebSocket = roomConnections[index].socket;
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
