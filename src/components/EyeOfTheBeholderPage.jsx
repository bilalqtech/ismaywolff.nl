/* @flow */

/**
 * Dependencies
**/

import React from 'react';
import { style } from 'glamor';
import Header from './Header';

/**
 * Styles
**/

const image = style({
  maxWidth: '50%',
});

/**
 * Component: EyeOfTheBeholderPage
**/

const EyeOfTheBeholderPage = () =>
  (<div>
    <Header />
    <main>
      <div>
        <h2>Eye of the beholder</h2>
        <h3>Installation · June 2009</h3>
        <p>A site-specific installation in a church in Groningen. The installation's suspended by a cable through a traditional opening in the ceiling called the eye of god. Lighting was randomly turned on and off through a controller in the attic. The box consists of mirrors facing inwards and a single light, where a one-way mirror allows the viewer to see inside.</p>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456157195/eye-of-the-beholder/1.jpg">
          <img {...image} alt="Eye of the beholder" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456157195/eye-of-the-beholder/1.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456157235/eye-of-the-beholder/2.jpg">
          <img {...image} alt="Eye of the beholder" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456157235/eye-of-the-beholder/2.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182588/eye-of-the-beholder/3.jpg">
          <img {...image} alt="Eye of the beholder" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182588/eye-of-the-beholder/3.jpg" />
        </a>
        <p>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
          <span> - </span>
          <a href="https://gitlab.com/ismay/images/tree/master/lib/eye-of-the-beholder">Download images and videos</a>
        </p>
      </div>
    </main>
  </div>);

/**
 * Export
**/

export default EyeOfTheBeholderPage;
