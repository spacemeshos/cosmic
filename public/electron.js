const electron = require("electron");
const { app, BrowserWindow, protocol } = electron;
const isDev = require("electron-is-dev");
const path = require("path");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    titleBarStyle: "hidden",
    width: 1281,
    height: 800,
    icon: path.join(__dirname, "../public/icons/png/64x64.png"),
    webPreferences: {
      webSecurity: false
    },
    show: false
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "/../build/index.html")}`
  );
  if (isDev) {
  mainWindow.webContents.openDevTools();
  }

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Prompt users before window close
  mainWindow.on("close", e => {
    e.preventDefault();
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", () => {
  protocol.interceptFileProtocol('file', (request, callback) => {
    const url = request.url.substr(7)
    callback({
      path: path.normalize(`${url}`)
    })
  }, (err) => {
    if (err) console.log('Failed to register protocol');
  });
  createWindow();
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});