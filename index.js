//Керування розповсюдження подій

const body = document.body;
const section = document.querySelector("section");
const button = document.querySelector("button");

/*button.addEventListener('click', buttonClickHandler)
function buttonClickHandler(event){
console.log(event);
console.log(this)
console.log(event.target);
console.log(event.currentTarget);

//якщо я хочу змінити колір кнопки
this.style.backgroundColor = 'blue'
}

function clickHandler(event){
  console.log(event);
  console.log(this)
  console.log(event.target);
  console.log(event.currentTarget);
  console.log('-----------------------------------------');
 
  event.target.style.backgroundColor = 'red'
  }
  
  //Занурення і всплиття - порядок виклику обробників

  //На занурення
  body.addEventListener('click', clickHandler,{capture:true})
  section.addEventListener('click', clickHandler,{capture:true})
  button.addEventListener('click', clickHandler,{capture:true})

  //На всплиття
  button.addEventListener('click', clickHandler)
  section.addEventListener('click', clickHandler)
  body.addEventListener('click', clickHandler)
*/
//Припинити розповсюдження події

let clickCounter = 0;

body.addEventListener("click", () => {
 clickCounter++ ;
 console.log(clickCounter)
});

button.addEventListener("click", (event) => {
  event.stopPropagation(); //припинення розповсюдження події

});
