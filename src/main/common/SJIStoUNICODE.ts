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
