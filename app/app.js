// Needed for redux-saga es6 generator support
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { MOUNT_NODE } from './common';
import App from './root-component';
import './styles/sass/styles.css';

export const render = messages => {
  ReactDOM.render(<App messages={messages} />, MOUNT_NODE);
};
