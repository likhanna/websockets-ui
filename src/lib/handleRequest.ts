import { loginAndCreatePlayer } from "../controllers/player/loginAndCreatePlayer.ts";
import { createRoom } from "../controllers/room/createRoom.ts";
import { ILoginReq } from "../models/loginModels.ts";
import { EReqType } from "../models/reqAndResModels.ts";
import { ICreateRoomReq } from "../models/roomModels.ts";

type ReqTypes = ILoginReq | ICreateRoomReq;

export const handleRequest = (req: ReqTypes) => {
  switch (req.type) {
    case EReqType.REG:
      return loginAndCreatePlayer(req);
    case EReqType.CREATE_ROOM:
      return createRoom();
  }
};
