import { BrowserWindow, ipcMain } from 'electron';

export function ipcMainProcess(win: BrowserWindow) {
  ipcMain.on('modify-title', (event, title) => {
    win.setTitle(title);
  });
  ipcMain.handle('message', async (event, message) => {
    console.log(`Received message: ${message}`);
    return `Received message: ${message}`;
  });
}
