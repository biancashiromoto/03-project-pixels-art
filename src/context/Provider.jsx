import PropTypes from "prop-types"
import { context } from './context';
import { useState } from 'react';

const Provider = ({ children }) => {
  const [currColor, setCurrColor] = useState('white');
  const [boardSize, setBoardSize] = useState(2);
  const pixels = Array.from({ length: boardSize }, () => '');
  const colors = ['blue', 'cyan', 'green', 'magenta', 'red', 'yellow'];
  const [paletteColors, setPaletteColors] = useState(colors);

  const value = {
    currColor,
    setCurrColor,
    boardSize,
    setBoardSize,
    pixels,
    colors,
    paletteColors,
    setPaletteColors
  };

  return (
    <context.Provider value={ value }>
      { children }
    </context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Provider;
