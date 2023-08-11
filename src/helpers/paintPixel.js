import { white } from "./info";

export const paintPixel = (e, currColor) => {
  let pixelStyle = e.target.style;
  const isPixelWhite = pixelStyle.backgroundColor === '' || pixelStyle.backgroundColor === white;
  (isPixelWhite ? pixelStyle.backgroundColor = currColor : pixelStyle.backgroundColor = white);
};