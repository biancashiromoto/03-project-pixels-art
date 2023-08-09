import { useContext } from "react";
import { context } from "../../context/context";
import Pixel from '../Pixel/Pixel';

const Row = () => {
  const { currColor, pixels } = useContext(context);

  const paintPixel = (e) => {
    let pixelStyle = e.target.style;
    console.log(pixelStyle.backgroundColor);
    const white = 'rgb(255, 255, 255)';
    (pixelStyle.backgroundColor === currColor)
      ? (pixelStyle.backgroundColor = white)
      : (pixelStyle.backgroundColor = currColor);
  }

  return (
    <div className={ `d-flex pixel-container}` }>
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
