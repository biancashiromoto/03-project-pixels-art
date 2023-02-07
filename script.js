const colors = ['#000000', '#ffb86c', '#8be9fd', '#50fa7b'];

const title = document.getElementsByTagName('h1')[0];
title.innerHTML = 'Paleta de Cores';
title.setAttribute('id', 'title');
const main = document.getElementsByTagName('main')[0];
const articlePalette = document.createElement('article');
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
