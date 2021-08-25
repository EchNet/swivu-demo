/**
 * App index file
 */
// polyfills (only required for IE11. If you don't use IE, delete them)
import 'core-js/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('container'));
