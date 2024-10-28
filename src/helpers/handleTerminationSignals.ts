import { wsServer } from "../ws_server/index.ts";

export const handleTerminationSignals = () => {
  console.log("Terminating program...");
  wsServer.close(() => {
    process.exit(0);
  });
};
