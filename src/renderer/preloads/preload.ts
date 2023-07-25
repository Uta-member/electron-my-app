import { contextBridge, ipcRenderer } from "electron";
import { testHandler } from "./testHandler";
import { shellHandler } from "./shellHandler";
import { fsHandler } from "./fsHandler";

// レンダラープロセスとメインプロセスの通信はこちらで定義する
const electronHandler = {
  test: testHandler,
  shell: shellHandler,
  fs: fsHandler,
};

contextBridge.exposeInMainWorld("electron", electronHandler);

export type ElectronHandler = typeof electronHandler;
