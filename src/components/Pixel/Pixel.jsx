import React, { useEffect, useState } from 'react';
import './Pixel.css';

const Pixel = ({props}) => {
  return (
    <div
        className={ `pixel border border-dark ${props && props}` }
        onClick={ () => console.log(props)}
    >
    </div>
  )
}

export default Pixel;
