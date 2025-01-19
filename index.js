//Обробка подій
/*Обробник подій - це певна функція, яка здійсниться наприклад при натисканні кнопки
Щоб навісити обробник на певну подію, нам потрібно мати доступ до елемента, тобто отримати посилання на елемент
через будь - який метод getElementById/getElementsByClassName/ getElementsByClassName
У властивість елемента onclick ми кладемо(присвоюємо функцію), це саме та функція, яка буде виконана, коли настанить подія

*/
const btn = document.getElementById('clickBtn');
console.log(btn);
console.dir(btn);

const clickHander = function (event){ // прописується подія
console.log('Btn was clicked');
};
btn.onclick = clickHander;//запустити кнопку

btn.onclick = null // зняти обробник, зробити кнопку неактивною
//--------------------------------------------------------------
/*У об'єкта loginBtn викликаємо метод addEventListener 
і у якості параметрів передати (подія, обробник)
Наша задача написати обробник

*/
const loginBtn = document.getElementById('loginBtn');
console.log(loginBtn)

function loginBtnHandler(event){
   alert('Login in process');
}
//addEventListener - навішувати обробник
loginBtn.addEventListener('click',loginBtnHandler); //'click' - подія,loginBtnHandler -посилальник  

//removeEventListener - знімати обробник
loginBtn.removeEventListener('click',loginBtnHandler);  //зняти подію
//----------------------------------------------------------------

//Виводити "Click me!" коли наводимо курсивом миші на конпу loginBtn
function loginMouseMoveHandler(event){
console.log("Click me!");
}

loginBtn.addEventListener('mousemove', loginMouseMoveHandler)
//----------------------------------------------------------------

//Створити конпу і при натисканні на неї виводити "Hello world!"

const click = document.getElementById('clickWorld')
console.log(click);

function clickWorld(event){
 alert('Hello world!')
}

click.onclick = clickWorld;