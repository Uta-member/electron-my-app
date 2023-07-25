import { SJIStoUNICODE } from "main/common/SJIStoUNICODE";
import { promisify } from "util";
const childProcess = require("child_process");

/**
 * コマンドを実行する関数
 * @param cmd 実行したいコマンド
 * @returns コマンドの実行結果
 */
export const execCmd = async (cmd: string): Promise<string> => {
  const exec = promisify(childProcess.exec);
  try {
    const result = await exec(cmd, { encoding: "Shift_JIS" });
    if (result?.error) {
      const errorstr = SJIStoUNICODE(result.error);
      return errorstr;
    }

    const stdout = SJIStoUNICODE(result.stdout);

    return stdout;
  } catch (err) {
    console.error(err);
    return "コマンドが不正です";
  }
};
