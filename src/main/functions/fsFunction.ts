import { ipcMain } from "electron";
import { readFileSync } from "fs";

/**
 * ファイルを読み込んで中身を返す関数
 * @param filePath ファイルのパス
 * @returns ファイルの中身。ファイルが存在しない場合はその旨を返す。
 */
const readFile = (filePath: string) => {
  try {
    const fileData = readFileSync(filePath, { encoding: "utf-8" });
    return fileData;
  } catch (err) {
    return "ファイルが存在しません";
  }
};

const fsFunctionListener = () => {
  ipcMain.handle("read-file", async (event, [filePath]: string[]) =>
    readFile(filePath)
  );
};

export default fsFunctionListener;
