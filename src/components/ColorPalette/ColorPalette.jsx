import { useContext } from 'react';
import { context } from '../../context/context';
import Pixel from '../Pixel/Pixel';
import './ColorPalette.css';

const ColorPalette = () => {
  const { colors } = useContext(context);
  return (
    <div className='d-flex mx-2'>
      {colors.map((color, index) => (
        <div key={index} className='pixel-container d-flex'>
            <Pixel props={color} />
        </div>
      ))}
    </div>
  )
}

export default ColorPalette;
