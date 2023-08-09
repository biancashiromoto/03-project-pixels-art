import React from 'react';
import Pixel from '../Pixel/Pixel';

const Row = ({ props }) => {
  return (
    <div className='d-flex'>
      {props.map((_, index) => {
        return <Pixel key={index} />
      })}
    </div>
  )
}

export default Row;
