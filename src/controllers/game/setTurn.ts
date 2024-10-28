import { EResType } from "../../models/reqAndResModels.ts";
import { ITurn, ITurnData } from "../../models/gameModels.ts";
import { TConnections } from "../../models/roomModels.ts";
import WebSocket from "ws";
import { sendToClient } from "../../ws_server/index.ts";

export const setTurn = (connections: TConnections, clientIndex: string) => {
  const turnData: ITurnData = {
    currentPlayer: clientIndex,
  };
  const res: ITurn = {
    type: EResType.TURN,
    data: JSON.stringify(turnData),
    id: 0,
  };
  for (const index in connections) {
    const socket: WebSocket = connections[index];
    sendToClient(socket, res);
  }
};
