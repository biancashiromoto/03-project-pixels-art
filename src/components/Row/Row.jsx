import { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';
import './Row.css';

const Row = () => {
  const { currColor, pixels, boardSize } = useContext(context);
  const [pixelSize, setPixelSize] = useState(100);

  const paintPixel = (e) => {
    let pixelStyle = e.target.style;
    const white = 'rgb(255, 255, 255)';
    (pixelStyle.backgroundColor === currColor)
      ? (pixelStyle.backgroundColor = white)
      : (pixelStyle.backgroundColor = currColor);
  }

  useEffect(() => {
    const newPixelSize = 100 - (boardSize * 7.5);
    const minPixelSize = 30;
    const currPixelSize = Math.max(newPixelSize, minPixelSize);
    setPixelSize(currPixelSize);
  }, [boardSize]);

  useEffect(() => {
    console.log(pixelSize);
  }, [pixelSize]);

  return (
    <div className={ `row d-flex pixel-container` }>
      {pixels.map((_pixel, index) => (
        <Pixel
          key={index}
          onClick={ (e) => paintPixel(e) }
          width={ `${pixelSize}` }
        />
      ))}
    </div>
  )
}

export default Row;
