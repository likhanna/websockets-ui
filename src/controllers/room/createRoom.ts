import { generateIdx } from "../../helpers/generateIdx.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { IRoomData, IUpdateRoom } from "../../models/roomModels.ts";

export const createRoom = (): IUpdateRoom => {
  const roomId = generateIdx();

  const newRoomData: IRoomData = {
    roomId,
    roomUsers: [],
  };

  return {
    type: EResType.UPDATE_ROOM,
    data: JSON.stringify([newRoomData]),
    id: 0,
  };
};
