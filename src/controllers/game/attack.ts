import { IAttackReq, IReqAttackData } from "../../models/gameModels.ts";
import { sendAttackFeedback } from "./sendAttackFeedBack.ts";
import { IAddShipsData } from "../../models/shipsModels.ts";
import { TConnections } from "../../models/roomModels.ts";

export const attack = (
  req: IAttackReq,
  clientsShipsData: IAddShipsData[],
  connections: TConnections
) => {
  const { data } = req;
  const parsedAttackData: IReqAttackData = JSON.parse(data);
  sendAttackFeedback(connections, parsedAttackData, clientsShipsData);
};
