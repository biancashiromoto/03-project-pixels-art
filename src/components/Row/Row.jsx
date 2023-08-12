import { useContext, useEffect, useState } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';
import { resizePixel } from "../../helpers/resizePixel";
import { createArray } from "../../helpers/createArray";
import { INITIAL_PIXEL_SIZE } from "../../helpers/info";
import { paintPixel } from "../../helpers/paintPixel";

const Row = () => {
  const { currColor, boardSize } = useContext(context);
  const [pixelSize, setPixelSize] = useState(INITIAL_PIXEL_SIZE);
  const pixels = createArray(boardSize);
  console.log(boardSize);
  
  useEffect(() => {
    const currPixelSize = resizePixel(boardSize);
    setPixelSize(currPixelSize);
  }, [boardSize]);

  return (
    <div className={ `row d-flex pixel-container` }>
      {pixels.map((_pixel, index) => (
        <Pixel
          key={index}
          onClick={ (e) => paintPixel(e, currColor) }
          width={ `${pixelSize}` }
          className='board-pixel'
        />
      ))}
    </div>
  )
}

export default Row;
