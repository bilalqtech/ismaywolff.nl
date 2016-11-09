/* @flow */

/**
 * Dependencies
**/

import React from 'react';
import { Link } from 'react-router';

/**
 * Component: WorkPage
**/

const WorkPage = () =>
  (<div>
    <main>
      <h2>Work</h2>
      <div>
        <h2><Link to="/work/mould">Mould</Link></h2>
        <p>A project inspired by the use of statistics in psychology. These images are averages of twenty-five portraits each. They're computer…</p>
      </div>
      <div>
        <h2><Link to="/work/induction">Induction</Link></h2>
        <p>An installation made during an exchange in Germany, in the abandoned military hospital complex of Beelitz-Heilstätten. Created with bits of…</p>
      </div>
      <div>
        <h2><Link to="/work/subject">Subject</Link></h2>
        <p>A project focused on finding and documenting the smallest village in the Netherlands. The search led to a village called Breezanddijk, which…</p>
      </div>
      <div>
        <h2><Link to="/work/eye-of-the-beholder">Eye of the beholder</Link></h2>
        <p>A site-specific installation in a church in Groningen. The installation's suspended by a cable through a traditional opening in the ceiling…</p>
      </div>
    </main>
  </div>);

/**
 * Export
**/

export default WorkPage;
