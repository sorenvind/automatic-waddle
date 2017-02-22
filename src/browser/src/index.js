import * as url from 'url';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// Wiring
const parsedUrl = url.parse(window.location.href, true);
const backendPort = parsedUrl.query.backend;

// Entry point
ReactDOM.render(
  <App
    server={`localhost:${backendPort}`}
  />,
  document.getElementById('root')
);
