import {
  contextBridge,
  ipcRenderer,
  NotificationConstructorOptions,
} from "electron";

// レンダラープロセスとメインプロセスの通信はこちらで定義する
const electronHandler = {
  test: {
    sendTest: (testMsg: string) => {
      ipcRenderer.send("test-msg", [testMsg]);
    },
  },
  shell: {
    execNotification: (notificationOption: NotificationConstructorOptions) => {
      ipcRenderer.send("exec-notification", [notificationOption]);
    },
    execCmd: async (cmd: string): Promise<string> => {
      return await ipcRenderer.invoke("exec-cmd", [cmd]);
    },
  },
  fs: {
    readFile: async (filePath: string) => {
      const data = await ipcRenderer.invoke("read-file", [filePath]);
      return data;
    },
  },
};

contextBridge.exposeInMainWorld("electron", electronHandler);

export type ElectronHandler = typeof electronHandler;
