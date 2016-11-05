/* @flow */

import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import AboutPage from './components/AboutPage';
import MouldPage from './components/MouldPage';
import InductionPage from './components/InductionPage';
import SubjectPage from './components/SubjectPage';
import EyeOfTheBeholderPage from './components/EyeOfTheBeholderPage';
import WorkPage from './components/WorkPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={WorkPage} />
    <Route path="/work">
      <Route path="/work/mould" component={MouldPage} />
      <Route path="/work/induction" component={InductionPage} />
      <Route path="/work/subject" component={SubjectPage} />
      <Route path="/work/eye-of-the-beholder" component={EyeOfTheBeholderPage} />
    </Route>
    <Route path="/about" component={AboutPage} />
  </Route>
);
