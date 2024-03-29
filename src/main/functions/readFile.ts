import { readFileSync } from "fs";

/**
 * ファイルを読み込んで中身を返す関数
 * @param filePath ファイルのパス
 * @returns ファイルの中身。ファイルが存在しない場合はその旨を返す。
 */
export const readFile = (filePath: string) => {
  try {
    const fileData = readFileSync(filePath, { encoding: "utf-8" });
    return fileData;
  } catch (err) {
    return "ファイルが存在しません";
  }
};
