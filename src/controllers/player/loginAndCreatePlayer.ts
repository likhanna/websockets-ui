import { WebSocket } from "ws";
import {
  ILoginReq,
  ILoginReqData,
  ILoginRes,
  ILoginResData,
} from "../../models/loginModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";
import { IRoomData, IRoomUser } from "../../models/roomModels.ts";
import { sendToClient, generateIdx } from "../../helpers/index.ts";
import { updateWinners } from "./updateWinners.ts";
import { updateRoom } from "../index.ts";

export const loginAndCreatePlayer = (
  req: ILoginReq,
  socket: WebSocket,
  rooms: IRoomData[]
) => {
  const { data } = req;
  const playerData: ILoginReqData = JSON.parse(data);
  const name = playerData.name;
  const playerIndex = generateIdx();

  if (rooms.length > 0) {
    const roomWithSameUser: IRoomData | undefined = rooms.find((room) =>
      room.roomUsers.find((user) => user.name === name)
    );

    if (roomWithSameUser) {
      console.log("User with the same name already in the room");
      return;
    }
  }

  const resData: ILoginResData = {
    name,
    index: playerIndex,
    error: false,
    errorText: "",
  };

  const res: ILoginRes = {
    type: EResType.REG,
    data: JSON.stringify(resData),
    id: 0,
  };

  sendToClient(socket, res);

  updateRoom([...rooms]);
  updateWinners([]);

  return JSON.parse(res.data);
};
