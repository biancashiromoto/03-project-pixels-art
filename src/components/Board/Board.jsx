import { useContext } from 'react';
import { context } from '../../context/context';
import Row from '../Row/Row';
import { createArray } from '../../helpers/createArray';
import Button from '../Button/Button';
import { clearBoardButton, white } from '../../helpers/info';

const Board = () => {
  const { boardSize } = useContext(context);
  const pixels = createArray(boardSize);
  
  const clearBoard = () => {
    const boardPixels = document.getElementsByClassName('board-pixel');
    const boardPixelArray = [...boardPixels];
    boardPixelArray.forEach((pixel) => {
      pixel.style.backgroundColor = white;
    });
  };

  return (
    <>
      <div className='board d-flex flex-column align-items-center'>
        {pixels.map((_pixel, index) => (<Row key={index} />))}
      </div>
      <div>
        <Button
        onClick={() => clearBoard()}
        label={clearBoardButton}
        />
      </div>
    </>
  )
}

export default Board;
