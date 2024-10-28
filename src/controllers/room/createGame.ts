import {
  ICreateGame,
  ICreatedGameData,
  IRoomUser,
  TConnections,
} from "../../models/roomModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { sendToClient } from "../../ws_server/index.ts";
import { WebSocket } from "ws";
import { generateIdx } from "../../helpers/generateIdx.ts";

export const createGame = (
  connections: TConnections,
  roomUsers: IRoomUser[]
) => {
  const idGame = generateIdx();
  roomUsers.forEach(({ index }) => {
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
  });
};
