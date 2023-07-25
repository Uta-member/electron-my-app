import { execCmdChannel } from "contextBridge/channels/shellFunctions";
import { ipcMain } from "electron";
import { execCmd } from "main/functions/execCmd";
import { ExecCmdReq, ExecCmdRes } from "types/contextBridge/shellFunctions";

export const shellHandler = () => {
  // 戻り値のあるものは"handle"でリスナーを立てて、
  // レンダラー側はinvokeを使って
  ipcMain.handle(
    execCmdChannel,
    async (_event, req: ExecCmdReq): Promise<ExecCmdRes> => {
      const { cmd } = req;
      const result = await execCmd(cmd);
      return {
        result,
      };
    }
  );
};
