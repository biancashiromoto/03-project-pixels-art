const colors = ['#000000', '#ffb86c', '#8be9fd', '#50fa7b', '#ff5555', '#ff79c6', '#f1fa8c'];

// window.onload = () => {
const title = document.getElementsByTagName('h1')[0];
title.innerHTML = 'Paleta de Cores';
title.setAttribute('id', 'title');
// };
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
  console.log(colorSample);
}
