import { ExecCmdReq } from "types/contextBridge/shellFunctions";

/**
 * コマンドを実行して結果を返す関数
 * @param req
 * @returns
 */
export const execCmd = async (req: ExecCmdReq) => {
  return await window.electron.shell.execCmd(req);
};
