import PropTypes from "prop-types"
import { context } from './context';
import { useState } from 'react';
import { INITIAL_BOARD_SIZE, colors } from "../helpers/info";

const Provider = ({ children }) => {
  const [currColor, setCurrColor] = useState('white');
  const [boardSize, setBoardSize] = useState(INITIAL_BOARD_SIZE);
  const [paletteColors, setPaletteColors] = useState(colors);

  const value = {
    currColor,
    setCurrColor,
    boardSize,
    setBoardSize,
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
