const box = document.querySelector('.box');
const decreaseBtn = document.querySelector('.js-decrease');
const increaseBtn = document.querySelector('.js-increase');

// Початкові розміри
let boxWidth = box.offsetWidth;
let boxHeight = box.offsetHeight;

// Обмеження
const MIN_SIZE = 20;
const MAX_SIZE = 300;

// Зменшення
decreaseBtn.addEventListener('click', () => {
  if (boxWidth > MIN_SIZE && boxHeight > MIN_SIZE) {
    boxWidth -= 20;
    boxHeight -= 20;
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
  }
});

// Збільшення
increaseBtn.addEventListener('click', () => {
  if (boxWidth < MAX_SIZE && boxHeight < MAX_SIZE) {
    boxWidth += 20;
    boxHeight += 20;
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
  }
});
