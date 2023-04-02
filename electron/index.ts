import { app, BrowserWindow, shell, ipcMain } from "electron";
//import { release } from "node:os";
import { join } from "node:path";
import runner from "./Simulator/runner";

process.env.DIST_ELECTRON = join(__dirname, "../");
process.env.DIST = join(process.env.DIST_ELECTRON, "../dist");
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL ? join(process.env.DIST_ELECTRON, "../public") : process.env.DIST;

//process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

if (process.platform === "win32") app.setAppUserModelId(app.getName());

app.on("window-all-closed", () => app.quit());

app.on("certificate-error", () => app.quit());

//const preload = join(__dirname, "../preload.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, "index.html");

function createWindow () {
  const mainWindow = new BrowserWindow({
    title: "Flight Simulator",
    width: 800,
    height: 625,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(url);
    //mainWindow.webContents.openDevTools();
  }
  else mainWindow.loadFile(indexHtml);

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url);
    return { action: "deny" };
  });
}

app.on("ready", createWindow);



export interface OpenedWindowsProps {
  [key: string]: BrowserWindow;
}

const OpenedWindows: OpenedWindowsProps = {};

let Runner = runner(OpenedWindows);

ipcMain.handle("open-new-window", (_, code) => {
  const title = code[0].toUpperCase() + code.substring(1, code.length);
  
  if (BrowserWindow.getAllWindows().map(value => value.title).indexOf(title) > -1) return;

  const childWindow = new BrowserWindow({
    width: code === "debug" ? 800 : 600,
    height: code === "debug" ? 650 : 625,
    resizable: false,
    autoHideMenuBar: true,
    title,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });

  if (process.env.VITE_DEV_SERVER_URL) childWindow.loadURL(`${url}#/${code}`);
  else childWindow.loadFile(indexHtml, { hash: code });

  OpenedWindows[code] = childWindow;

  childWindow.on("close", () => {
    delete OpenedWindows[code];
    onWindowChange();
  });
  onWindowChange();

  function onWindowChange () {
    clearInterval(Runner);
    Runner = runner(OpenedWindows);
  }
});

export function sendMessage (message: string) {
  if (typeof OpenedWindows["debug"] !== "undefined") {
    OpenedWindows["debug"].webContents.send("message", message);
  }
}