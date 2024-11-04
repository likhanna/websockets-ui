import { sendToRoomClients, updateWinnersData } from "../../helpers/index.ts";
import { TConnections } from "../../models/connections.ts";
import { IFinishData } from "../../models/gameModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";

export const finishGame = (
  roomConnections: TConnections,
  connections: TConnections,
  attackingPlayerId: string,
  enemyPlayerId: string
) => {
  const finishData: IFinishData = {
    winPlayer: attackingPlayerId,
  };
  roomConnections[attackingPlayerId].schemaOfEnemyShips = [];
  roomConnections[enemyPlayerId].schemaOfEnemyShips = [];
  const res = {
    type: EResType.FINISH,
    data: JSON.stringify(finishData),
    id: 0,
  };
  sendToRoomClients(roomConnections, res);
  updateWinnersData(attackingPlayerId, connections);
  roomConnections[attackingPlayerId].turn = false;
};
