/**
 * Dependencies
**/

import React from 'react';
import Match from 'react-router/Match';
import { style } from 'glamor';
import AboutPage from '../components/AboutPage';
import EyeOfTheBeholderPage from '../components/EyeOfTheBeholderPage';
import Header from '../components/Header';
import InductionPage from '../components/InductionPage';
import MouldPage from '../components/MouldPage';
import SubjectPage from '../components/SubjectPage';
import WorkPage from '../components/WorkPage';

/**
 * Styles
**/

const wrapper = style({
  maxWidth: '30rem',
});

/**
 * Component: App
**/

const App = () =>
  (<div {...wrapper}>
    <Header />
    <Match exactly pattern="/" component={WorkPage} />
    <Match pattern="/about" component={AboutPage} />
    <Match pattern="/work/mould" component={MouldPage} />
    <Match pattern="/work/induction" component={InductionPage} />
    <Match pattern="/work/subject" component={SubjectPage} />
    <Match pattern="/work/eye-of-the-beholder" component={EyeOfTheBeholderPage} />
  </div>);

/**
 * Export
**/

export default App;
