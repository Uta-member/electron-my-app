import { readFileChannel } from "contextBridge/channels/fsFunctions";
import { ipcRenderer } from "electron";
import { ReadFileReq, ReadFileRes } from "types/contextBridge/fsFunctions";

/**
 * ファイル操作関連のハンドラ
 */
export const fsHandler = {
  readFile: async (req: ReadFileReq) => {
    const data: ReadFileRes = await ipcRenderer.invoke(readFileChannel, req);
    return data;
  },
};
