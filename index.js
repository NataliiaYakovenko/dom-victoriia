'use strict'

const section = document.createElement('section')
const divRoot = document.querySelector('#root')

//додавання дочірнього елемента 
//append -  додає елемент в кінець колекції (масиву, списку, рядка і т. п.).
//preppend -  додає елемент на початок колекції.

divRoot.append(section);
section.textContent = 'Lorem ipsum';
section.style.backgroundColor = 'grey'

const article = document.createElement('article');
divRoot.prepend(article);
article.textContent = 'Lorem ipsum';
article.style.backgroundColor = 'yellow'
//--------------------------------------------

//додаванн сіблінгів 
//before
//after

const button = document.createElement('button');
section.after(button)
button.textContent = 'button';

//видалення елементу
const divRemove = document.querySelector('.remove')
divRemove.addEventListener('click', function(){
  this.remove();
})
