//Атрибути
//Атрибути елемента - це властивості відповідних об'єктів

//Через властивості
const p1 = document.querySelector("#p1");
console.log(p1);
console.dir(p1);
console.log(p1.title);
console.log(p1.id);

//змінюємо атрибуе title
p1.title = "New title";

//Атрибут boolean задання
//p1.hidden = true;

//Атрибут style
p1.style.color = "green";
p1.style.backgroundColor = "pink";
//----------------------------------

//Через методи
const p2 = document.querySelector("#p2");
console.log(p2);
console.dir(p2);

//встановлюємо значення атрибуту
p2.setAttribute("title", "Title of p2"); //p id="p2" title ='Title of 2'

p2.setAttribute("style", "font-size: 30px; color: orange;"); // style = 'font - size: 30px; color: 'orange''

//якщо boolean
//p2.setAttribute('hidden','hidden') //в качестві значення вказуться таке саме як іключ

console.log(p2.getAttribute("style"));

//задати для body будь-який колір
//document.querySelector('body').style.backgroundColor='grey'
const body = document.querySelector("body");
body.style.backgroundColor = "grey";

//------------------------------------------------------------------
//Атрибут, який дозволяє змінити вміст якогось елемента
//Наприклад у р2 потрібно змінити текст
p2.textContent =
  "New content dkaldjaljdalda;lda;ldkal;dkaldka;lkdasl;dkal;dka;lk";
//--------------------------------------------------------------------

//Задати атрибути зображення по об'єктам
const imgAttr = {
  src: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
  alt: "cat",
};
const imgEl = document.querySelector('img')
imgEl.src = imgAttr.src;
imgEl.alt = imgAttr.alt;
//Задати розміри зображення
imgEl.setAttribute('width','400')