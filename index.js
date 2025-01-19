/*
Задача. При натисканні на кнопку

Отримати заголовок першого рівня
- встановити для нього інший кольор тла
- виставити для заголовків другого рівня шрифт 20рх і їх колір

Встановити src="" alt="" і розміри для головного зображення
Встановити src="" alt="" і розміри для зображення в головному артиклі
*/

/*Алгоритм
1. Отримати посилання на кнопку
2. Задати функцію обробник і навісити її як обробник події на клік
3. Наповнити цю функцію певним змістом
   - отримати посилання на h1
   - встановити для h1 кольор тла

*/

const btn = document.querySelector('button')

function getClickHandler(event){
 const h1 = document.querySelector('h1')
 h1.style.backgroundColor = 'blue'

 const img = document.querySelector('.mainImg')
 img.src="https://vetmarlborough.co.nz/wp-content/uploads/cat-facts.jpg";
 img. alt="cat";
 img.style.width = '300px';
 img.style.hight = '300px';
 img.style.objectFit = 'cover';

 const h2 = document.querySelectorAll('h2')
 h2. forEach((h2)=>{
     h2.style.fontSize = '20px';
     h2.style.color = 'green';
 })

}
btn.addEventListener('click',getClickHandler)