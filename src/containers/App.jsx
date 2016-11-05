/* @flow */

/**
 * Dependencies
**/

import React, { PropTypes } from 'react';
import { style } from 'glamor';

/**
 * Flow types
**/

type Props = {
  children: Element,
}

/**
 * Styles
**/

const wrapper = style({
  maxWidth: '30rem',
});

/**
 * Component: App
**/

const App = ({ children }: Props) =>
  <div {...wrapper}>{children}</div>;

/**
 * Properties
**/

App.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Export
**/

export default App;
