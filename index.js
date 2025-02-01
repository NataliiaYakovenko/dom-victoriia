"use strict";

//Користувацькі атрибути або ще їх називають data-*

const btns = document.querySelectorAll("button");

//data-host => dataset.host
function btnClickHandler(e) {
  console.log(e.target.dataset.host);
}
btns.forEach(b=>{b.onclick = btnClickHandler});

//data-host => dataset.host
console.log(btns[0].dataset.username);
console.log(btns[1].dataset.userName);
//-------------------------------------------------

//В контейнер помістити 4 кнопки
//В залежності від того на яку натискаєш,
// зінюється колір body

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');

function btnColorClickHandler(e) {
 document.body.style.backgroundColor =  e.target.dataset.color;
}
buttons.forEach(b=>{b.onclick = btnColorClickHandler});
