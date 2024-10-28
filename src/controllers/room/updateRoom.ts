import { IRoomData, IUpdateRoom } from "../../models/roomModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { sendToAllClients } from "../../ws_server/index.ts";

export const updateRoom = (roomData: IRoomData[]) => {
  const res: IUpdateRoom = {
    type: EResType.UPDATE_ROOM,
    data: JSON.stringify(roomData),
    id: 0,
  };
  sendToAllClients(res);
};
