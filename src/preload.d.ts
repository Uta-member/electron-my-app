import { ElectronHandler } from "renderer/preloads/preload";

declare global {
  // windowからpreloadで定義したelectronHandlerを呼び出せるように型を追加
  interface Window {
    electron: ElectronHandler;
  }
}

export {};
