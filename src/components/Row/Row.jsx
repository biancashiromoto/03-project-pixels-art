import { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';
import { resizePixel } from "../../helpers/resizePixel";
import { createArray } from "../../helpers/createArray";
import { INITIAL_PIXEL_SIZE } from "../../helpers/info";

const Row = () => {
  const { currColor, boardSize } = useContext(context);
  const [pixelSize, setPixelSize] = useState(INITIAL_PIXEL_SIZE);
  const pixels = createArray(boardSize);
  
  const paintPixel = (e) => {
    let pixelStyle = e.target.style;
    const white = 'rgb(255, 255, 255)';
    const isPixelWhite = pixelStyle.backgroundColor === '' || pixelStyle.backgroundColor === white;
    (isPixelWhite ? pixelStyle.backgroundColor = currColor : pixelStyle.backgroundColor = white);
  };

  useEffect(() => {
    const currPixelSize = resizePixel(boardSize);
    setPixelSize(currPixelSize);
  }, [boardSize]);

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
