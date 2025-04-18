import electron from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import InternalServer from './api/server.js'

const { app, BrowserWindow } = electron

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 655,
        minHeight: 655,
        minWidth: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: false
        },
        autoHideMenuBar: true,
        resizable: true
    })

    win.setMinimumSize(800, 655)

    const angularIndexPath = path.join(__dirname, 'dist/aporia-vault/browser/index.html')
    if (fs.existsSync(angularIndexPath)) {
        win.loadFile(angularIndexPath)
    } else {
        win.loadURL('http://localhost:4200')
    }

    win.webContents.on('did-finish-load', () => {
        win.webContents.setZoomFactor(1.0)
    })

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})