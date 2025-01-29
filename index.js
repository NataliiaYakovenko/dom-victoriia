'use strict'
const div = document.querySelector('.div');

div.addEventListener('click',function(){
  //this.classList.add('div2');
  //this.classList.remove('div');
  this.classList.toggle('div2')
});
div.style.color = 'red';
//класи - рядок з іменами класів, розділиними пробілами
//div.className = div.className + ' div2';

const fullName = document.querySelector('.full-name');

fullName.addEventListener('click',function(){
  this.classList.toggle('full-name')
})