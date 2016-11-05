/* @flow */

/**
 * Dependencies
**/

import { Router } from 'react-router';
import React, { PropTypes } from 'react';
import routes from '../routes';

/**
 * Flow types
**/

type Props = {
  history: Object,
}

/**
 * Component: Root
**/

const Root = ({ history }: Props) => <Router history={history} routes={routes} />;

/**
 * Properties
**/

Root.propTypes = {
  history: PropTypes.object.isRequired,
};

/**
 * Export
**/

export default Root;
