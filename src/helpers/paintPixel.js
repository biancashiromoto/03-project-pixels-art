export const paintPixel = (e, currColor) => {
  let pixelStyle = e.target.style;
  const white = 'rgb(255, 255, 255)';
  (pixelStyle.backgroundColor === currColor)
    ? (pixelStyle.backgroundColor = white)
    : (pixelStyle.backgroundColor = currColor);
};
