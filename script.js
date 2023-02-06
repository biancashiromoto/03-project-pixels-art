const colors = ['#000000', '#ffb86c', '#8be9fd', '#50fa7b', '#ff5555', '#ff79c6', '#f1fa8c'];

const title = document.getElementsByTagName('h1')[0];
title.innerHTML = 'Paleta de Cores';
title.setAttribute('id', 'title');
const main = document.getElementsByTagName('main')[0];
const colorPalette = document.createElement('section');
colorPalette.setAttribute('id', 'color-palette');
colorPalette.style.display = 'flex';
main.appendChild(colorPalette);
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
main.appendChild(randomColors);
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
  for (let index = 1; index < colorSquare.length; index += 1) {
    const colorSquareItem = colorSquare[index];
    if (colorSquareItem.style.backgroundColor !== '#000000') {
      colorSquareItem.style.backgroundColor = calcRandomColor();
      bcgkColorArray.push(colorSquareItem.style.backgroundColor);
    }
  }
};
randomColors.addEventListener('click', () => {
  changeBackgroundColor();
});
