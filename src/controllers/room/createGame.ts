import { ICreateGame, ICreatedGameData } from "../../models/roomModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { sendToAllClients } from "../../ws_server/index.ts";

export const createGame = (index: string) => {
  const createdGameData: ICreatedGameData = {
    idGame: index,
    idPlayer: index,
  };
  const res: ICreateGame = {
    type: EResType.CREATE_GAME,
    data: JSON.stringify(createdGameData),
    id: 0,
  };
  sendToAllClients(res);
};
