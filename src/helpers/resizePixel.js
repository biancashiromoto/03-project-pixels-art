export const resizePixel = (boardSize) => {
  const newPixelSize = 100 - (boardSize * 7.5);
    const minPixelSize = 30;
    return Math.max(newPixelSize, minPixelSize);
}
