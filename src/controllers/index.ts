import { addShips, startGame } from "./ships/index.ts";
import {
  addUserToRoom,
  createGame,
  createRoom,
  updateRoom,
} from "./room/index.ts";
import { attack, sendAttackFeedback, setTurn } from "./game/index.ts";
import { loginAndCreatePlayer, updateWinners } from "./player/index.ts";

export {
  addShips,
  startGame,
  addUserToRoom,
  createGame,
  createRoom,
  updateRoom,
  attack,
  sendAttackFeedback,
  setTurn,
  loginAndCreatePlayer,
  updateWinners,
};
