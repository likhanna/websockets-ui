import { WebSocket } from "ws";
import { TConnections } from "../../models/roomModels.ts";
import {
  IAddShipsData,
  IStartGame,
  IStartGameData,
} from "../../models/shipsModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { sendToClient } from "../../ws_server/index.ts";

export const startGame = (
  connections: TConnections,
  clientsShipsData: IAddShipsData[]
) => {
  clientsShipsData.forEach(({ ships, indexPlayer }) => {
    const socket: WebSocket = connections[indexPlayer];
    const startGameData: IStartGameData = {
      ships: [...ships],
      currentPlayerIndex: indexPlayer,
    };
    const res: IStartGame = {
      type: EResType.START_GAME,
      data: JSON.stringify(startGameData),
      id: 0,
    };
    sendToClient(socket, res);
  });
};
