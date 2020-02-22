import React from 'react';

import './slide1.scss';
// import ModelImage from './images/model-1.png';

export default () => (
  <div className="slide-one">
    <div className="slide-one__model-one">
      {/* <img src={ModelImage} alt="model one" /> */}
    </div>
    <div className="slide-one__text-bar" />
    <div className="slide-one__text-title">
      Who we are?
    </div>
    <div className="slide-one__text-box">
      We’re a London <span>web development</span> agency, providing high quality services of
      complete <span>web solutions</span>.
    </div>
  </div>
);
