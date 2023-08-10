import { useContext } from 'react';
import { context } from '../../context/context';
import Row from '../Row/Row';
import './Board.css';

const Board = () => {
  const { pixels } = useContext(context);
  return (
    <div className='board d-flex flex-column align-items-center'>
      {pixels.map((_pixel, index) => (<Row key={index} />))}
    </div>
  )
}

export default Board;
