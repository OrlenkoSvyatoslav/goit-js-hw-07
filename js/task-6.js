"use strict";
// Після натискання користувачем на кнопку Create треба провалідувати значення в input,
// воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову,
// мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount),
// яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
// Функція має створювати стільки < div > елементів, скільки вказано в параметрі
// amount і додавати їх у DOM дочірніми елементами для div#boxes.
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(),
// яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", onButtonCreateClick);
buttonDestroy.addEventListener("click", onDestroyBoxes);

function onButtonCreateClick() {
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    createBoxes(inputNumber.value);
  }
}
function onDestroyBoxes() {
  destroyBoxes();
}

function createBoxes(amount) {
  destroyBoxes();
  let width = 30;
  let height = 30;
  for (let i = 0; i <= amount; i++) {
    const boxColor = getRandomHexColor();
    const markup = `<div style="background-color:${boxColor};  
    width:${width}px; 
    height:${height}px;"></div> `;
    boxes.insertAdjacentHTML("beforeend", markup);
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
