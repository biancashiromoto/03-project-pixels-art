import { useContext } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';

const Row = () => {
  const { currColor, pixels } = useContext(context);

  const paintPixel = (e) => {
    e.target.style.backgroundColor = currColor;
  }

  return (
    <div className='d-flex'>
      {pixels.map((_pixel, index) => (
        <Pixel
          key={index}
          onClick={ (e) => {
            paintPixel(e);
            console.log(`a pixel from Row was clicked and should have ${currColor} color`);
          } }

        />
      ))}
    </div>
  )
}

export default Row;
