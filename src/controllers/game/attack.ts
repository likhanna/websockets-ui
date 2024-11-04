import { getRoomConnections } from "../../helpers/getRoomConnections.ts";
import { TConnections } from "../../models/connections.ts";
import {
  IAttackReq,
  IRandomAttackData,
  IRandomAttackReq,
  IReqAttackData,
} from "../../models/gameModels.ts";
import { sendAttackFeedback } from "./sendAttackFeedBack.ts";

export const attack = (
  req: IAttackReq | IRandomAttackReq,
  connections: TConnections
) => {
  const { indexPlayer } = JSON.parse(req.data);
  const roomId = connections[indexPlayer].roomId;
  const roomConnections = getRoomConnections(connections, roomId);
  const { data } = req;
  const parsedAttackData: IReqAttackData | IRandomAttackData = JSON.parse(data);
  const isPlayerTurn = roomConnections[parsedAttackData.indexPlayer].turn;

  if (isPlayerTurn) {
    sendAttackFeedback(roomConnections, parsedAttackData, connections);
  }
};
