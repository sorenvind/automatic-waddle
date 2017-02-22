const {app, BrowserWindow} = require('electron');
const EmojiService = require('../../src/node/EmojiService');
const WebServer = require('../../src/node/WebServer');

// Configuration
const emojiPort = 4444;
const webserverPort = 8080;

EmojiService.start(emojiPort);
WebServer.start(webserverPort);

let mainWindow = null;
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1200, height: 800});
  mainWindow.loadURL(`http://localhost:${webserverPort}/?backend=${emojiPort}`);
  // mainWindow.toggleDevTools();
});
