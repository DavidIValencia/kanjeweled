import 'babel-polyfill';
import React from 'react';
import Root from './components/Root.js';
import { render } from 'react-dom';

render(
  <Root />,
  document.getElementById('root')
);
