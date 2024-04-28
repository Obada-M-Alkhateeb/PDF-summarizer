const { app, BrowserWindow } = require('electron');

let win;

app.on('ready', () => {
  createWindow();
});

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Remove for development, add for production
    }
  });

  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.activate = () => {
  if (win === null) {
    createWindow();
  }
};
