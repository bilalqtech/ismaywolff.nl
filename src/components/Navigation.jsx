/**
 * Dependencies
**/

import React from 'react';
import Link from 'react-router/Link';

/**
 * Component: Navigation
**/

const Navigation = () =>
  (<nav>
    <Link to="/">Work</Link>
    <Link to="/about">About</Link>
  </nav>);

/**
 * Export
**/

export default Navigation;
