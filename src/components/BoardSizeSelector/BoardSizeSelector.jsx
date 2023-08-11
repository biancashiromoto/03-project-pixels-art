import { useContext } from 'react';
import { context } from '../../context/context';
import { INITIAL_BOARD_SIZE, MAX_BOARD_SIZE } from '../../helpers/info';
import Button from '../Button/Button';

const BoardSizeSelector = () => {
  const { boardSize, setBoardSize } = useContext(context);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setBoardSize(inputValue);
  };

  return (
    <form className='form-group d-flex align-items-center justify-content-center'>
      <Button
        onClick={(e)=> {
          e.preventDefault();
          console.log(boardSize);
          setBoardSize(prevSize => prevSize <= INITIAL_BOARD_SIZE ? INITIAL_BOARD_SIZE : prevSize - 1)
        }}
        label='-'
      />
     <div className='d-flex flex-column align-items-center justify-content-center'>
      <input
          className='form-control-range'
          id='formControlRange'
          min={INITIAL_BOARD_SIZE}
          max={MAX_BOARD_SIZE}
          type='range'
          defaultValue={INITIAL_BOARD_SIZE}
          value={boardSize}
          onChange={ (e) => handleInputChange(e) }
          style={ {width: '200px'}}
        />
        <span>{boardSize}</span>
     </div>
      <Button
        onClick={(e)=> {
          e.preventDefault();
          setBoardSize(prevSize => prevSize >= MAX_BOARD_SIZE ? MAX_BOARD_SIZE : prevSize + 1)
        }}
        label='+'
      />
    </form>
  )
}

export default BoardSizeSelector;
