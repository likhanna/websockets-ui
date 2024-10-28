import {
  IAttackReq,
  IRandomAttackReq,
  IReqAttackData,
} from "../../models/gameModels.ts";
import { sendAttackFeedback } from "./sendAttackFeedBack.ts";
import { IAddShipsData } from "../../models/shipsModels.ts";
import { TConnections } from "../../models/roomModels.ts";

export const attack = (
  req: IAttackReq | IRandomAttackReq,
  clientsShipsData: IAddShipsData[],
  connections: TConnections
) => {
  const { data } = req;
  const parsedAttackData: IReqAttackData = JSON.parse(data);
  const winnerId = sendAttackFeedback(
    connections,
    parsedAttackData,
    clientsShipsData
  );
  return winnerId;
};
