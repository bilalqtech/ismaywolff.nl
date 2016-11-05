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
 * Component: MouldPage
**/

const MouldPage = () =>
  (<div>
    <Header />
    <main>
      <div>
        <h2>Mould</h2>
        <h3>Digital · July 2012</h3>
        <p>A project inspired by the use of statistics in psychology. These images are averages of twenty-five portraits each. They're computer generated, by averaging the shapes as well as the colors of each individual face with software of my own design. The portraits each focus on a separate area of portraiture: science, status, beauty and self-portraits.</p>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456180874/mould/1.jpg">
          <img {...image} alt="Mould" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456180874/mould/1.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182431/mould/2.jpg">
          <img {...image} alt="Mould" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182431/mould/2.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182427/mould/3.jpg">
          <img {...image} alt="Mould" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182427/mould/3.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456179861/mould/4.jpg">
          <img {...image} alt="Mould" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456179861/mould/4.jpg" />
        </a>
      </div>
    </main>
  </div>);

/**
 * Export
**/

export default MouldPage;
