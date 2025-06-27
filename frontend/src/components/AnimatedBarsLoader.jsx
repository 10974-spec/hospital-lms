import React from 'react';
import './AnimatedBarsLoader.css'; // We’ll define the styles here

const AnimatedBarsLoader = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default AnimatedBarsLoader;
