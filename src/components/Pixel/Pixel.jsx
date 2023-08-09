import React, { useEffect, useState } from 'react';
import './Pixel.css';

const Pixel = ({ onClick, color }) => {
  return (
    <div
        className={ `pixel border border-dark ${color && color}` }
        onClick={ onClick }
    >
    </div>
  )
}

export default Pixel;
