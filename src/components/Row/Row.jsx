import { useContext } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';
import './Row.module.css';

const Row = () => {
  const { currColor, pixels } = useContext(context);

  const paintPixel = (e) => {
    let pixelStyle = e.target.style;
    const white = 'rgb(255, 255, 255)';
    (pixelStyle.backgroundColor === white)
      ? (pixelStyle.backgroundColor = currColor)
      : (pixelStyle.backgroundColor = white);
  }

  return (
    <div className='pixel-container d-flex'>
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
