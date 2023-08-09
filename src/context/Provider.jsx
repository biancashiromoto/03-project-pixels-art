import PropTypes from "prop-types"
import { context } from './context';
import { useState } from 'react';

const Provider = ({ children }) => {
  const [currColor, setCurrColor] = useState('white');
  const [boardSize, setBoardSize] = useState(2);

  const value = {
    currColor,
    setCurrColor,
    boardSize,
    setBoardSize
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
