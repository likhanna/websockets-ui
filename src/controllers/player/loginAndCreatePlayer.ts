import { generateIdx } from "../../helpers/generateIdx.ts";
import {
  ILoginReq,
  ILoginReqData,
  ILoginRes,
  ILoginResData,
} from "../../models/loginModels.ts";
import { EResType } from "../../models/reqAndResModels.ts";

export const loginAndCreatePlayer = (req: ILoginReq): ILoginRes => {
  const { data } = req;
  const parsedData: ILoginReqData = JSON.parse(data);
  const name = parsedData.name;
  const playerIndex = generateIdx();

  const resData: ILoginResData = {
    name,
    index: playerIndex,
    error: false,
    errorText: "",
  };

  return {
    type: EResType.REG,
    data: JSON.stringify(resData),
    id: 0,
  };
};
