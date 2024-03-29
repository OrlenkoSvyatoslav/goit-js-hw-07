"use strict";
//Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
//Під час відправлення форми сторінка не повинна перезавантажуватися.
//Якщо при сабміті у формі є незаповнені поля,
//виводь alert з попередженням про те,
//що 'All form fields must be filled in'.
//Не додавай на інпути атрибут required,
//валідація має відбуватися саме через JS.
//Якщо користувач заповнив усі поля і відправив форму,
//збери значення полів в об'єкт з двома властивостями,
//де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів,
//очищені від пробілів по краях.Для доступу до елементів форми використовуй властивість elements.

const form = document.querySelector(".login-form");

function onCheckForm(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const objForm = {
    email: `${email}`,
    password: `${password}`,
  };
  console.log(objForm);
  form.reset();
}
form.addEventListener("submit", onCheckForm);
