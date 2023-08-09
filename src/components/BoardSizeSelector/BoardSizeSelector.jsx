import { useContext, useState } from 'react';
import { context } from '../../context/context';

const BoardSizeSelector = () => {
  const { setBoardSize } = useContext(context);
  const [newSize, setNewSize] = useState(0);

  const handleInputChange = (e) => {
    const inputValue = e.target.value
    setNewSize(inputValue);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setBoardSize(newSize);
  };

  return (
    <form>
      <input
        min={2}
        max={10}
        type='number'
        onChange={ (e) => handleInputChange(e) }
      />
      <button onClick={ (e) => handleButtonClick(e) }>
        Select
      </button>
    </form>
  )
}

export default BoardSizeSelector;
