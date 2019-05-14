const {app, BrowserWindow} = require('electron');
const url = 'http://127.0.0.1:8009';
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 576,
        minWidth: 1024,
        minHeight: 576

        /*width: 300,
        height: 400,
        minimizable: false,
        maximizable: false,
        //alwaysOnTop: true,
        resizable: false*/
    });
    //mainWindow.loadFile('index.html');
    //mainWindow.loadURL(url + '/login');
    mainWindow.loadURL(url + '/content');
    mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);
app.on('window-all-closed', () => (process.platform !== 'darwin') && app.quit());
app.on('activate', () => !mainWindow && createWindow());
