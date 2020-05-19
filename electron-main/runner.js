const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  if(process.env.NODE_ENV === 'production') {
    win.loadFile('./dist/index.html')
  } else {
    const url = require('url').format({
      protocol: 'http',
      slashes: true,
      pathname: 'localhost:8080'
    })
    
    win.loadURL(url)
  }
}

app.whenReady().then(createWindow)