import { useContext } from 'react';
import { context } from '../../context/context';

const BoardSizeSelector = () => {
  const { setBoardSize } = useContext(context);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setBoardSize(inputValue);
  };

  return (
    <form>
      <input
        min={2}
        max={10}
        type='number'
        defaultValue={2}
        onChange={ (e) => handleInputChange(e) }
      />
    </form>
  )
}

export default BoardSizeSelector;
