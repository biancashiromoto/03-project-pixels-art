import { useContext } from 'react';
import { context } from '../../context/context';
import Row from '../Row/Row';
import { createArray } from '../../helpers/createArray';

const Board = () => {
  const { boardSize } = useContext(context);
  const pixels = createArray(boardSize);

  return (
    <div className='board d-flex flex-column align-items-center'>
      {pixels.map((_pixel, index) => (<Row key={index} />))}
    </div>
  )
}

export default Board;
