import { WebSocket } from "ws";
import { IStartGame, IStartGameData } from "../../models/shipsModels.ts";
import { TConnections } from "../../models/connections.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { sendToClient } from "../../helpers/index.ts";

export const startGame = (roomConnections: TConnections) => {
  for (const index in roomConnections) {
    const socket: WebSocket = roomConnections[index].socket;
    const startGameData: IStartGameData = {
      ships: [...roomConnections[index].ships],
      currentPlayerIndex: index,
    };
    const res: IStartGame = {
      type: EResType.START_GAME,
      data: JSON.stringify(startGameData),
      id: 0,
    };
    sendToClient(socket, res);
  }
};
