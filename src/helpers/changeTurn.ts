import { setTurn } from "../controllers/index.ts";
import { TConnections } from "../models/connections.ts";
import { IAttackStatus } from "../models/gameModels.ts";

export const changeTurn = (
  roomConnections: TConnections,
  resStatus: IAttackStatus,
  attackingPlayerId: string,
  enemyPlayerId: string
) => {
  if (resStatus === "killed" || resStatus === "shot") {
    setTurn(roomConnections, attackingPlayerId);
  } else if (resStatus === "miss") {
    roomConnections[attackingPlayerId].turn = false;
    setTurn(roomConnections, enemyPlayerId);
  }
};
