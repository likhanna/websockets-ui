import { EResType } from "../../models/reqAndResModels.ts";
import { ITurn, ITurnData } from "../../models/gameModels.ts";
import { TConnections } from "../../models/connections.ts";
import { sendToRoomClients } from "../../helpers/index.ts";

export const setTurn = (roomConnections: TConnections, clientIndex: string) => {
  roomConnections[clientIndex].turn = true;
  const turnData: ITurnData = {
    currentPlayer: clientIndex,
  };
  const res: ITurn = {
    type: EResType.TURN,
    data: JSON.stringify(turnData),
    id: 0,
  };
  sendToRoomClients(roomConnections, res);
};
