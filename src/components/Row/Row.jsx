import { useContext } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';

const Row = () => {
  const { currColor, pixels } = useContext(context);

  const paintPixel = (e) => {
    let pixelStyle = e.target.style;
    (pixelStyle.backgroundColor === 'white')
      ? (pixelStyle.backgroundColor = currColor)
      : (pixelStyle.backgroundColor = 'white');
  }

  return (
    <div className='d-flex'>
      {pixels.map((_pixel, index) => (
        <Pixel
          key={index}
          onClick={ (e) => paintPixel(e) }
        />
      ))}
    </div>
  )
}

export default Row;
