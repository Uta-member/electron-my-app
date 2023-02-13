import { ipcMain } from "electron";

/**
 * 引数で受け取った文字列をコンソールに出すだけの関数
 * @param msg 表示したい文字列
 */
const testMsg = (msg: string) => {
  console.log(msg);
};

/**
 * レンダラーから通知を受け取るリスナーを立てる処理
 */
const testFunctionListener = () => {
  // メインプロセスで"on"としておくと、レンダラーで"send"したときに
  // 通知を受け取り、対応するチャンネル名(今回はtest-msg)の処理が実行される
  // つまりこの関数を呼ぶときはレンダラーでipcRenderer.send("test-msg", [文字列])とすればいい
  ipcMain.on("test-msg", (event, [msg]: string[]) => testMsg(msg));
};

export default testFunctionListener;
