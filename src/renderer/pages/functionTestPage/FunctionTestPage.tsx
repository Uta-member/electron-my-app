import { useState } from "react";
import { readFile } from "renderer/apiFunctions/fsFunctions/readFile";
import { execCmd } from "renderer/apiFunctions/shellFunctions/execCmd";
import { sendTest } from "renderer/apiFunctions/testFunctions/sendTest";

const FunctionTestPage = () => {
  const [cmdState, setCmdState] = useState("");
  const [cmdResultState, setCmdResultState] = useState("");
  const [fileNameState, setFileNameState] = useState("README.md");
  const [fileContentState, setFileContentState] = useState("");

  const handleClickSendTestMsg = () => {
    sendTest({ msg: "this is test message" });
  };

  const execNotification = () => {
    new window.Notification("てすと通知です", { body: "通知の内容です" });
  };

  const handleClickExecCmd = async () => {
    const cmdResult = await execCmd({ cmd: cmdState });
    setCmdResultState(cmdResult.result);
  };

  const handleClickReadFile = async () => {
    const fileContent = await readFile({
      filePath: fileNameState,
    });
    setFileContentState(fileContent.fileData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px",
      }}
    >
      <h1>機能テストページ</h1>
      <button onClick={handleClickSendTestMsg}>testMsg呼び出し</button>
      <button onClick={execNotification}>通知呼び出し</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          padding: "5px 10px 10px 10px",
        }}
      >
        <p>コマンドテスト</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="text"
            value={cmdState}
            onChange={(e) => {
              setCmdState(e.target.value);
            }}
            placeholder={"コマンド"}
          />
          <button onClick={handleClickExecCmd}>実行</button>
        </div>
        <textarea value={cmdResultState} placeholder={"実行結果"} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          padding: "5px 10px 10px 10px",
        }}
      >
        <p>ファイルアクセステスト</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="text"
            value={fileNameState}
            onChange={(e) => {
              setFileNameState(e.target.value);
            }}
            placeholder={"ファイル名"}
          />
          <button onClick={handleClickReadFile}>実行</button>
        </div>
        <textarea value={fileContentState} placeholder={"ファイルの内容"} />
      </div>
    </div>
  );
};

export default FunctionTestPage;
