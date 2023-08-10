import { useContext } from 'react';
import { context } from '../../context/context';
import { INITIAL_BOARD_SIZE, MAX_BOARD_SIZE } from '../../helpers/info';

const BoardSizeSelector = () => {
  const { boardSize, setBoardSize } = useContext(context);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setBoardSize(inputValue);
  };

  return (
    <form className='form-group'>
      <input
        className='form-control-range'
        id='formControlRange'
        min={INITIAL_BOARD_SIZE}
        max={MAX_BOARD_SIZE}
        type='range'
        defaultValue={INITIAL_BOARD_SIZE}
        onChange={ (e) => handleInputChange(e) }
      />
      <span>{boardSize}</span>
    </form>
  )
}

export default BoardSizeSelector;
