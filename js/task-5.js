"use strict";
// Напиши скрипт, який змінює колір фону елемента < body > через інлайн - стиль
// по кліку на button.change - color і задає це значення кольору текстовим вмістом для span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", onButtonChangeClick);

function onButtonChangeClick(event) {
  event.preventDefault();
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = body.style.backgroundColor;
  console.log(body.style.backgroundColor);
  console.log(spanColor.textContent);
}
