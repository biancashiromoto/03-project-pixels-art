const colors = ['#000000', '#ffb86c', '#8be9fd', '#50fa7b'];

const title = document.getElementsByTagName('h1')[0];
title.innerHTML = 'Paleta de Cores';
title.setAttribute('id', 'title');
const main = document.getElementsByTagName('main')[0];
const articlePalette = document.createElement('article');
articlePalette.classList.add('article-palette');
main.appendChild(articlePalette);
articlePalette.style.display = 'flex';
const colorPalette = document.createElement('section');
colorPalette.setAttribute('id', 'color-palette');
colorPalette.style.width = '500px';
colorPalette.style.height = '100px';
colorPalette.style.display = 'flex';
articlePalette.appendChild(colorPalette);
for (let index = 0; index < colors.length; index += 1) {
  const colorSample = document.createElement('div');
  colorSample.style.backgroundColor = colors[index];
  colorSample.classList.add('color');
  colorSample.style.border = 'solid 1px black';
  colorPalette.appendChild(colorSample);
}
const randomColors = document.createElement('button');
randomColors.setAttribute('id', 'button-random-color');
randomColors.innerHTML = 'Cores aleatórias';
articlePalette.appendChild(randomColors);
const calcRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const newColor = `rgb(${red}, ${green}, ${blue})`;
  return newColor;
};
const colorSquare = document.querySelectorAll('.color');
const changeBackgroundColor = () => {
  const bcgkColorArray = [];
  localStorage.setItem('colorPalette', bcgkColorArray);
  for (let index = 0; index < colorSquare.length; index += 1) {
    colorSquare[0].style.backgroundColor = '#000000';
    const colorSquareItem = colorSquare[index];
    colorSquareItem.style.backgroundColor = calcRandomColor();
    bcgkColorArray.push(colorSquareItem.style.backgroundColor);
  }
  localStorage.colorPalette = JSON.stringify(bcgkColorArray);
};

randomColors.addEventListener('click', () => {
  changeBackgroundColor();
});

// ********************************************************
// const getLocalStorage = () => {
//   if (localStorage !== null) {
//     const colorsArray = JSON.parse(localStorage.getItem('colorPalette'));
//     const colorSquares = document.getElementsByClassName('color');
//     for (let index = 1; index < colorSquares.length; index += 1) {
//       colorSquares[index].style.backgroundColor = colorsArray[index];
//     }
//   }
// };
// getLocalStorage();
// *********************************************************

const pixelBoard = document.createElement('section');
pixelBoard.setAttribute('id', 'pixel-board');
main.appendChild(pixelBoard);

for (let index = 0; index < 5; index += 1) {
  const pixel = document.createElement('div');
  pixelBoard.appendChild(pixel);
  pixel.classList.add('pixel');
  for (let index2 = 1; index2 < 5; index2 += 1) {
    const pixel2 = document.createElement('div');
    pixelBoard.appendChild(pixel2);
    pixel2.classList.add('pixel');
  }
}
