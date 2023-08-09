import { useContext } from 'react';
import { context } from '../../context/context';
import Pixel from '../Pixel/Pixel';
import './ColorPalette.css';

const ColorPalette = () => {
  const { setCurrColor, paletteColors, setPaletteColors } = useContext(context);

  const calcRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const getNewColorPalette = () => {
    let newPalette = [];
    paletteColors.map(() => {
      const newColor = calcRandomColor();
      newPalette.push(newColor);
    })
    setPaletteColors(newPalette);
  };

  return (
    <div className='d-flex mx-2'>
      {paletteColors.map((color, index) => (
        <div key={index} className='pixel-container d-flex'>
            <Pixel
              color={color}
              onClick={ () => setCurrColor(color) }
            />
        </div>
      ))}
      <button
        onClick={ () => getNewColorPalette() }
      >Random colors</button>
    </div>
  )
}

export default ColorPalette;
