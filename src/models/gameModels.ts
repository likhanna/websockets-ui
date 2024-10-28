import { EReqType, EResType } from "./reqAndResModels.ts";
import { IPosition } from "./shipsModels.ts";

export interface ITurnData {
  currentPlayer: string;
}

export interface ITurn {
  type: EResType.TURN;
  data: string;
  id: 0;
}

export interface IReqAttackData {
  gameId: string;
  x: number;
  y: number;
  indexPlayer: string;
}
export interface IAttackReq {
  type: EReqType.ATTACK;
  data: string;
  id: 0;
}

export type IAttackStatus = "miss" | "killed" | "shot";

export interface IAttackFeedbackData {
  position: IPosition;
  currentPlayer: string;
  status: IAttackStatus;
}

export interface IAttackFeedback {
  type: EResType.ATTACK;
  data: string;
  id: 0;
}
