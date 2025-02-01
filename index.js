"use strict";

const users = [
  {
    firstName: 'Test1',
    lastName: 'Testovich1',
    age: 28,
    photoSrc: 'https://sigc.edu/sigc/ad-sigc/datas/images/userimg.jpg',
  },
  {
    firstName: 'Test2',
    lastName: 'Testovich2',
    age: 31,
    photoSrc:
      'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    firstName: 'Test3',
    lastName: 'Testovich3',
    age: 70,
    photoSrc:
      'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    firstName: 'Test4',
    lastName: 'Testovich4',
    age: 20,
    photoSrc:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    firstName: 'Test5',
    lastName: 'Testovich5',
    age: 28,
    photoSrc:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
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


//викорисовуємо метод map
const userCards = users.map(u=>creatUserCard(u))
console.log(userCards);
document.body.append(...userCards);

function creatUserCard(user){
const userCardEl = document.createElement("article");
userCardEl.classList.add("user-card");
const userImg = creatImg(user);
const userInfo = creatUserInfo(user);
const trash = creatTrash();

userCardEl.append(userImg,userInfo,trash);

return userCardEl;
}


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
