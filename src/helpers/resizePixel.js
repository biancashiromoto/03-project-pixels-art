import { getScreenWidth } from "./getScreenWidth";

export const resizePixel = (boardSize) => {
  const screenWidth = getScreenWidth();
    return (screenWidth - (screenWidth * 0.25)) / boardSize;
}
