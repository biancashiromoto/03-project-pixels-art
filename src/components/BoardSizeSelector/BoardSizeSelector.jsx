import { useContext } from 'react';
import { context } from '../../context/context';

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
        min={2}
        max={10}
        type='range'
        defaultValue={2}
        onChange={ (e) => handleInputChange(e) }
      />
      <span>{boardSize}</span>
    </form>
  )
}

export default BoardSizeSelector;
