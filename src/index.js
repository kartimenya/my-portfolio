import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import './scss/app.scss';

import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById('root'),
);
