import { sendTestChannel } from "contextBridge/channels/testFunctions";
import { ipcRenderer } from "electron";
import { SendTestReq } from "types/contextBridge/testFunctions";

/**
 * テスト関数のハンドラ
 */
export const testHandler = {
  sendTest: (req: SendTestReq) => {
    ipcRenderer.send(sendTestChannel, req);
  },
};
