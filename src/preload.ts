// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
import { ipcRenderer, contextBridge } from 'electron';

declare global {
  interface Window {
    electronAPI: {
      modifyTitle: (title: string) => void;
      message: (message: string) => Promise<string>;
    };
  }
}

// Expose ipcRenderer to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  modifyTitle: (title: string) => {
    ipcRenderer.send('modify-title', title);
  },
  message: async (message: string) => {
    console.log(`[*] renderer -> preload -> main: ${message}`);
    return await ipcRenderer.invoke('message', message);
  },
});
