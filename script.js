const getLocalStorage = () => {
  if (localStorage.length !== 0) {
    const colorsArray = JSON.parse(localStorage.getItem('colorPalette'));
    const colorSquares = document.getElementsByClassName('color');
    for (let index = 0; index < colorSquares.length; index += 1) {
     colorSquares[index].style.backgroundColor = colorsArray[index];
    }
  }
};

window.onload = () => {
  getLocalStorage();
};

const main = document.getElementsByTagName('main')[0];

const articlePalette = document.createElement('article');
articlePalette.classList.add('article-palette');
main.appendChild(articlePalette);
articlePalette.style.display = 'flex';

const colorPalette = document.createElement('section');
colorPalette.setAttribute('id', 'color-palette');
colorPalette.style.width = '300px';
colorPalette.style.height = '100px';
colorPalette.style.display = 'flex';
articlePalette.appendChild(colorPalette);

const colors = ['#000000', '#ffb86c', '#8be9fd', '#50fa7b'];
for (let index = 0; index < colors.length; index += 1) {
  const colorSample = document.createElement('div');
  colorSample.classList.add('color');
  colorSample.style.border = 'solid 1px black';
  colorPalette.appendChild(colorSample);
  colorSample.style.backgroundColor = colors[index];
}

const header = document.querySelector('.header');

const title = document.createElement('h1');
title.innerHTML = 'Paleta de Cores';
title.setAttribute('id', 'title');
header.appendChild(title);

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
colorSquare[0].classList.add('selected');
const changeBackgroundColor = () => {
  // let bcgkColorArray = [];
  for (let index = 0; index < colorSquare.length; index += 1) {
    colorSquare[0].style.backgroundColor = '#000000';
    const colorSquareItem = colorSquare[index];
    colorSquareItem.style.backgroundColor = calcRandomColor();
  }
};

const setLocalStorage = () => {
  const newColorPalette = document.getElementsByClassName('color');
  const bcgkColorArray = [];
  for (let index = 0; index < newColorPalette.length; index += 1) {
    const newColorPaletteItem = newColorPalette[index].style.backgroundColor;
    bcgkColorArray.push(newColorPaletteItem);
  }
  localStorage.colorPalette = JSON.stringify(bcgkColorArray);

};

randomColors.addEventListener('click', () => {
  changeBackgroundColor();
  setLocalStorage();
});

const articleBoard = document.createElement('article');
articleBoard.classList.add('article-board');
main.appendChild(articleBoard);

const pixelBoard = document.createElement('section');
pixelBoard.setAttribute('id', 'pixel-board');
articleBoard.appendChild(pixelBoard);

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

const getColor = () => {
  const clickedColor = document.querySelectorAll('.selected');
  for (let index = 0; index < clickedColor.length; index += 1) {
    const squareItemBckgColor = clickedColor[index].style.backgroundColor;
    return squareItemBckgColor;
  }
};

colorSquare.forEach(squareItem => {
  squareItem.addEventListener('click', () => {
    const selectedColor = document.querySelector('.selected');
    if (selectedColor) {
      selectedColor.classList.remove('selected');
    }
    squareItem.classList.add('selected');
  });
});

const pixelSquares = document.getElementsByClassName('pixel');
for (let index = 0; index < pixelSquares.length; index += 1) {
  pixelSquares[index].addEventListener('click', () => {
    pixelSquares[index].style.backgroundColor = getColor();
  });
}

const clearBoardButton = document.createElement('button');
clearBoardButton.innerHTML = 'Limpar';
clearBoardButton.setAttribute('id', 'clear-board');
articlePalette.appendChild(clearBoardButton);

clearBoardButton.addEventListener('click', () => {
  for (let index = 0; index < pixelSquares.length; index += 1) {
    pixelSquares[index].style.backgroundColor = 'white';
  }
});
