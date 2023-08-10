import { useContext } from 'react';
import { context } from '../../context/context';
import Pixel from '../Pixel/Pixel';
import './ColorPalette.css';
import { getRandomColor } from '../../helpers/getRandomColor';

const ColorPalette = () => {
  const { setCurrColor, paletteColors, setPaletteColors } = useContext(context);

  const getNewColorPalette = () => {
    let newPalette = [];
    paletteColors.map(() => {
      const newColor = getRandomColor();
      newPalette.push(newColor);
    })
    setPaletteColors(newPalette);
  };

  return (
    <>
      <div className='d-flex mx-2 flex-wrap align-items-center justify-content-center'>
        {paletteColors.map((color, index) => (
          <div key={index} className='pixel-container d-flex'>
              <Pixel
                color={color}
                onClick={ () => {
                  setCurrColor(color);
                } }
              />
          </div>
        ))}
      </div>
      <button
        onClick={ () => getNewColorPalette() }
      >Random colors</button>
    </>
  )
}

export default ColorPalette;
