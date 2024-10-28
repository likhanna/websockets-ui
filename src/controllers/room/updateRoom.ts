import { IRoomData, IUpdateRoom } from "../../models/roomModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { sendToAllClients } from "../../helpers/sendData.ts";

export const updateRoom = (roomData: IRoomData[]) => {
  const res: IUpdateRoom = {
    type: EResType.UPDATE_ROOM,
    data: JSON.stringify(roomData),
    id: 0,
  };
  sendToAllClients(res);
};
