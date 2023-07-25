import { execCmdChannel } from "contextBridge/channels/shellFunctions";
import { ipcRenderer } from "electron";
import { ExecCmdReq, ExecCmdRes } from "types/contextBridge/shellFunctions";

/**
 * OSの機能に関する関数のハンドラ
 */
export const shellHandler = {
  execCmd: async (req: ExecCmdReq): Promise<ExecCmdRes> => {
    const result: ExecCmdRes = await ipcRenderer.invoke(execCmdChannel, req);
    return result;
  },
};
