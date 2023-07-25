import { sendTestChannel } from "contextBridge/channels/testFunctions";
import { ipcMain } from "electron";
import { testMsg } from "main/functions/testMsg";
import { SendTestReq } from "types/contextBridge/testFunctions";

/**
 * レンダラーから通知を受け取るリスナーを立てる処理
 */
export const testHandler = () => {
  // メインプロセスで"on"としておくと、レンダラーで"send"したときに
  // 通知を受け取り、対応するチャンネル名の処理が実行される
  ipcMain.on(sendTestChannel, (_event, req: SendTestReq) => {
    const { msg } = req;
    testMsg(msg);
  });
};
