import { readFileChannel } from "contextBridge/channels/fsFunctions";
import { ipcMain } from "electron";
import { readFile } from "main/functions/readFile";
import { ReadFileReq, ReadFileRes } from "types/contextBridge/fsFunctions";

export const fsHandler = () => {
  ipcMain.handle(readFileChannel, (_event, req: ReadFileReq): ReadFileRes => {
    const { filePath } = req;
    const fileData = readFile(filePath);
    return { fileData };
  });
};
