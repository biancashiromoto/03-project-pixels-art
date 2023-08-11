import { getScreenWidth } from "./getScreenWidth";

const isMobileScreen = (value) => value <= 320;
const isTabletScreen = (value) => value > 321 && value <= 768;
const isMonitorScreen = (value) => value > 768;

export const resizePixel = (boardSize) => {
  const screenWidth = getScreenWidth();
  if (isMobileScreen(screenWidth)) {
    return (screenWidth - (screenWidth * .25)) / boardSize;
  } 
  if (isTabletScreen(screenWidth)) {
    return (screenWidth - (screenWidth * 0.35)) / boardSize;
  }
  return isMonitorScreen(screenWidth) && (screenWidth - (screenWidth * 0.75)) / boardSize;
}
