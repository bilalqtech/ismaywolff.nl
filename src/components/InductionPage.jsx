/**
 * Dependencies
**/

import React from 'react';
import { style } from 'glamor';
import DocumentTitle from 'react-document-title';

/**
 * Styles
**/

const image = style({
  maxWidth: '50%',
});

const video = style({
  maxWidth: '100%',
});

/**
 * Component: InductionPage
**/

const InductionPage = () =>
  (<div>
    <DocumentTitle title="Induction • Ismay Wolff" />
    <main>
      <div>
        <h2>Induction</h2>
        <h3>Installation · September 2011</h3>
        <p>An installation made during an exchange in Germany, in the abandoned military hospital complex of Beelitz-Heilstätten. Created with bits of machinery that were lying around and unhindered by any knowledge of electrical engineering. The machine consumes old VHS tapes found in the storage area of the complex.</p>
        <video {...video} controls>
          <source src="https://res.cloudinary.com/ismay/video/upload/v1472655225/induction/video-1.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/ismay/video/upload/v1472655225/induction/video-1.mp4" type="video/mp4" />
          <source src="https://res.cloudinary.com/ismay/video/upload/v1472655225/induction/video-1.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <video {...video} controls>
          <source src="https://res.cloudinary.com/ismay/video/upload/v1472655225/induction/video-2.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/ismay/video/upload/v1472655225/induction/video-2.mp4" type="video/mp4" />
          <source src="https://res.cloudinary.com/ismay/video/upload/v1472655225/induction/video-2.ogv" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182563/induction/1.jpg">
          <img {...image} alt="Induction" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182563/induction/1.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182568/induction/2.jpg">
          <img {...image} alt="Induction" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182568/induction/2.jpg" />
        </a>
        <a href="https://res.cloudinary.com/ismay/image/upload/f_auto,q_auto,w_1000/v1456182588/induction/3.jpg">
          <img {...image} alt="Induction" src="https://res.cloudinary.com/ismay/image/upload/w_550,h_350,c_fill,f_auto,g_auto,q_auto/v1456182588/induction/3.jpg" />
        </a>
        <p>
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
          <span> - </span>
          <a href="https://gitlab.com/ismay/images/tree/master/lib/induction">Download images and videos</a>
        </p>
      </div>
    </main>
  </div>);

/**
 * Export
**/

export default InductionPage;
