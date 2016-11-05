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
 * Component: SubjectPage
**/

const SubjectPage = () =>
  (<div>
    <Header />
    <main>
      <div>
        <h2>Subject</h2>
        <h3>Photography · April 2011</h3>
        <p>A project focused on finding and documenting the smallest village in the Netherlands. The search led to a village called Breezanddijk, which is located in the middle of the largest dike of the Netherlands. It's inhabited by a single family who operate a shipyard there and is accompanied by a small campsite.</p>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182574/subject/1.jpg">
          <img {...image} alt="Subject" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182574/subject/1.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182572/subject/2.jpg">
          <img {...image} alt="Subject" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182572/subject/2.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456157362/subject/3.jpg">
          <img {...image} alt="Subject" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456157362/subject/3.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182595/subject/4.jpg">
          <img {...image} alt="Subject" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182595/subject/4.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182585/subject/5.jpg">
          <img {...image} alt="Subject" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182585/subject/5.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182566/subject/6.jpg">
          <img {...image} alt="Subject" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182566/subject/6.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456157312/subject/7.jpg">
          <img {...image} alt="Subject" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456157312/subject/7.jpg" />
        </a>
        <p>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
          <span> - </span>
          <a href="https://gitlab.com/ismay/images/tree/master/lib/subject">Download images and videos</a>
        </p>
      </div>
    </main>
  </div>);

/**
 * Export
**/

export default SubjectPage;
