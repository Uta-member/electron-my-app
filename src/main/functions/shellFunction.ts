import {
  ipcMain,
  NotificationConstructorOptions,
  shell,
  Notification,
} from "electron";
import { promisify } from "util";
const childProcess = require("child_process");
const Encoding = require("encoding-japanese");

/**
 * s-jisをUnicodeに変換する関数
 * @param bytes s-jisの文字列
 * @returns
 */
export const SJIStoUNICODE = (bytes: string) => {
  return Encoding.convert(bytes, {
    from: "SJIS",
    to: "UNICODE",
    type: "string",
  });
};

/**
 * urlを基底のブラウザで開く関数
 * @param url 開きたいurl
 */
const openUrl = (url: string) => {
  shell.openExternal(url);
};

/**
 * コマンドを実行する関数
 * @param cmd 実行したいコマンド
 * @returns コマンドの実行結果
 */
const cmdFunction = async (cmd: string): Promise<string> => {
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

/**
 * OSの通知を実行する関数
 * @param notificationOptions 通知のオプション
 */
const execNotification = (
  notificationOptions: NotificationConstructorOptions
) => {
  new Notification(notificationOptions).show();
};

const shellFunctionListener = () => {
  ipcMain.on("open-url", (event, [url]: string[]) => openUrl(url));
  // 戻り値のあるものは"handle"でリスナーを立てて、
  // レンダラー側はinvokeを使って
  ipcMain.handle(
    "exec-cmd",
    async (event, [cmd]: string[]) => await cmdFunction(cmd)
  );
  ipcMain.on(
    "exec-notification",
    (event, [notificationOptions]: NotificationConstructorOptions[]) =>
      execNotification(notificationOptions)
  );
};

export default shellFunctionListener;
