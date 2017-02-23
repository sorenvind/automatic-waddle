# automatic-waddle
Cross-platform Electron and Browser architecture sample

This project showcases how one can create an architecture where almost all code 
can be shared between a desktop (Electron) and web platform. 

## Code organisation
Shared code lives in `src/`, in either `node/` or `browser/` depending on its execution environment.
Code specific to the Electron environment can be found in `pkg/electron`.

### EmojiService (`src/node/EmojiService.js`)
The EmojiService responds to GET and POST requests under path `/aaw` and returns an emoji-translation
of the given input string (received as url parameter or form-encoded).

### Webserver (`src/node/WebServer.js`)
The webserver (also used by Electron) serves the frontend sources found in `src/browser/build`,
to (re-)generate those run `npm run build` in `src/browser/`.

### Frontend (`src/browser/`)
Built on top of Create React App, with `src/browser/src/TranslationService.js` abstracting queries to EmojiService.
To run a development version of the frontend, run `npm start` in `src/browser/`.
To create a build (which will be served by the webserver) run `npm run build` in `src/browser/`.

## Dependencies
Run `npm install --no-optional` to install required local dependencies.

## How to run
Use `npm run $target`, with $target set to either:
    
    emoji: starts the emoji service
    serve: starts the web server
    electron: starts the electron app
