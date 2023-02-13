import { useState } from "react";

const FunctionTestPage = () => {
  // コマンドを入れておくState
  const [cmdState, setCmdState] = useState("");
  const [cmdResultState, setCmdResultState] = useState("");

  const [fileNameState, setFileNameState] = useState("README.md");
  const [fileContentState, setFileContentState] = useState("");

  const sendTestMsg = () => {
    window.electron.test.sendTest("this is testMessage");
  };

  const execCmd = async () => {
    const cmdResult = await window.electron.shell.execCmd(cmdState);
    setCmdResultState(cmdResult);
  };

  const readFile = async () => {
    const fileContent = await window.electron.fs.readFile(fileNameState);
    setFileContentState(fileContent);
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
      <button onClick={sendTestMsg}>testMsg呼び出し</button>
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
          <button onClick={execCmd}>実行</button>
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
          <button onClick={readFile}>実行</button>
        </div>
        <textarea value={fileContentState} placeholder={"ファイルの内容"} />
      </div>
    </div>
  );
};

export default FunctionTestPage;
