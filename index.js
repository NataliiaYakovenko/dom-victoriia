
const burgerBtn = document.querySelector('.burgerMenuBtn');
const burgerContaner = document.querySelector('.burgerMenuContainer')

burgerBtn.addEventListener('click', burgerClickHandler);
function burgerClickHandler(event){
  burgerContaner.classList.toggle('burgerMenuContainerHide');
  burgerContaner.classList.toggle('burgerMenuContainerActive');
  console.log('btn');
  event.stopPropagation();
}

document.body.addEventListener('click',bodyClickHandler,/*{capture: true}*/)
function bodyClickHandler(){
  burgerContaner.classList.add('burgerMenuContainerHide');
  burgerContaner.classList.remove('burgerMenuContainerActive');
  console.log('body');

}

