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
const userCardEl = document.createElement("article");
userCardEl.classList.add("user-card");
document.body.append(userCardEl);

const userImg = creatImg(user);
const userInfo = creatUserInfo(user);
const trash = creatTrash();

userCardEl.append(userImg,userInfo,trash);


function creatTrash(){
  const trash = document.createElement("i");
  trash.classList.add("fa-solid");
  trash.classList.add("fa-trash");
  trash.classList.add("trash-icon");
  
  function deleteTfash(event) {
    event.target.closest(".user-card").remove();
  }
  trash.onclick = deleteTfash;
  return trash;
}

function creatUserInfo({firstName,lastName,age}) {
  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");
  
  const userNameEl = document.createElement("p");
  userNameEl.classList.add("user-name");
  userNameEl.textContent = `${firstName} ${lastName}`;
  userInfo.append(userNameEl);
  
  const userAge = document.createElement("span");
  userAge.classList.add("user-age");
  userAge.textContent = age;
  userInfo.append(userAge);
  
  return userInfo;
}

function creatImg({ photoSrc, firstName, lastName }) {
  const userImg = document.createElement("img");
  userImg.src = photoSrc;
  userImg.alt = `${firstName} ${lastName}`;
  userImg.classList.add("user-image");
  return userImg;
}
