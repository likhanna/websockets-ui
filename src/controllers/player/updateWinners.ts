import { IUpdateWinners, IWinnerData } from "../../models/winnerModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { sendToAllClients } from "../../ws_server/index.ts";

export const updateWinners = (winnersData: IWinnerData[]) => {
  const res: IUpdateWinners = {
    type: EResType.UPDATE_WINNERS,
    data: JSON.stringify(winnersData),
    id: 0,
  };
  sendToAllClients(res);
};
