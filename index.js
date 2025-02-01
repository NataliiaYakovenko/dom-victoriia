"use strict";

const user = {
  firstName: "Roland",
  lastName: "Simonyan",
  age: 27,
  photoSrc:
    "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?ga=GA1.1.1872930788.1728835828&semt=ais_hybrid",
};
/*
Алгоритм

Обовєязкові
1. Створити елемент

Необхідні
2. Задати значення атрибута
3. Якщо необхідно.Додати класи
4. Додати контент
5. Додати обробник на якусь подію

Обовєязкові
6. Вбудуваи його туди куди потрібно
*/
const userCardEl = document.createElement('article');
userCardEl.classList.add('user-card')
document.body.append(userCardEl);

const userImg = document.createElement('img');
userImg.src = user.photoSrc;
userImg.alt = `${user.firstName} ${user.lastName}`;
userImg.classList.add('user-image');
userCardEl.append(userImg);

const userInfo = document.createElement('div');
userInfo.classList.add('user-info');
userCardEl.append(userInfo);

const userNameEl = document.createElement('p');
userNameEl.classList.add('user-name');
userNameEl.textContent = `${user.firstName} ${user.lastName}`;
userInfo.append(userNameEl);

const userAge = document.createElement('span');
userAge.classList.add('user-age');
userAge.textContent = user.age;
userInfo.append(userAge);

const trash = document.createElement('i');
trash.classList.add('fa-solid');
trash.classList.add('fa-trash');
trash.classList.add('trash-icon');

function deleteTfash(event){
  userCardEl.remove();
}
trash.onclick = deleteTfash;

userCardEl.append(trash);





