"use strict";

//setTimeout - виконати дію через певний час

//setInterval - виконувати одну і ту саму дію з певним інтервалом

function timeoutAction() {
  console.log("hello");
}
console.log("before timeout");
const timeoutId = setTimeout(timeoutAction, 3000);
console.log("after timeout");
clearTimeout(timeoutId); // приостановити дію

let i = 0;
function intervalHandler() {
  if (i === 5) {
    return clearInterval(intervalId);
  }
  console.log(++i);
}

console.log("before interval");
const intervalId = setInterval(intervalHandler, 2000);
console.log("after interval");
//clearInterval(intervalId) // приостановити дію


function deleteBtn(){
  const btn = document.querySelector('button');
  btn.remove();
}
setTimeout(deleteBtn, 3000); //автоматичне видалення кнопки через 3 секунди
//-----------------------------------------------------

//При натисканні на кнопку перефарбувати її через 2 секунди

const changeBtn = document.querySelector('.btn');

function changeColor(event){
  setTimeout(()=>{
    changeBtn.style.backgroundColor = 'red'
  },2000)
}
changeBtn.addEventListener('click',changeColor)
//-------------------------------------------------------

//Після натискання на кнопку змінювати її колір кожні 2 секунди

const paintBtn = document.querySelector('.paintBtn')

function paintingButton (){
  setInterval(()=>{
    paintBtn.style.backgroundColor = 'green'
  },2000);
}
paintBtn.addEventListener('click',paintingButton);