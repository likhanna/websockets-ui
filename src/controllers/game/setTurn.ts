import { EResType } from "../../models/reqAndResModels.ts";
import { ITurn, ITurnData } from "../../models/gameModels.ts";
import { TConnections } from "../../models/roomModels.ts";
import { sendToRoomClients } from "../../helpers/sendData.ts";

export const setTurn = (connections: TConnections, clientIndex: string) => {
  const turnData: ITurnData = {
    currentPlayer: clientIndex,
  };
  const res: ITurn = {
    type: EResType.TURN,
    data: JSON.stringify(turnData),
    id: 0,
  };
  sendToRoomClients(connections, res);
};
