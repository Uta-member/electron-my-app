import { ReadFileReq } from "types/contextBridge/fsFunctions";

/**
 * 指定されたファイルパスのファイルの中身を返す関数
 * @param readFileReq
 * @returns
 */
export const readFile = async (readFileReq: ReadFileReq) => {
  return await window.electron.fs.readFile(readFileReq);
};
