import { ElectronHandler } from "renderer/preload";

declare global {
  // windowからpreloadで定義したelectronHandlerを呼び出せるように型を追加
  interface Window {
    electron: ElectronHandler;
  }
}

export {};
