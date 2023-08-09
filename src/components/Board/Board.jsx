import { useContext } from 'react';
import { context } from '../../context/context';
import Row from '../Row/Row';

const Board = () => {
  const { pixels } = useContext(context);
  return (
    <div className='d-flex flex-column align-items-center'>
      {pixels.map((_pixel, index) => (<Row key={index} />))}
    </div>
  )
}

export default Board;
