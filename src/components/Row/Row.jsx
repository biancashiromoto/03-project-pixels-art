import { useContext } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';

const Row = () => {
  const { currColor, pixels } = useContext(context);
  return (
    <div className='d-flex'>
      {pixels.map((_pixel, index) => (
        <Pixel key={index} />
      ))}
    </div>
  )
}

export default Row;
