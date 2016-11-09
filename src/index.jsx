// Load polyfills
import 'babel-polyfill';

// Import dependencies
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

render(
  <Root />,
  document.getElementById('app')
);
