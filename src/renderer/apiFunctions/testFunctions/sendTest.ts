import { SendTestReq } from "types/contextBridge/testFunctions";

/**
 * テストメッセージをmainプロセスに送る関数
 * @param req
 */
export const sendTest = (req: SendTestReq) => {
  window.electron.test.sendTest(req);
};
