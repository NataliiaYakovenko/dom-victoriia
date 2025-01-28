/*Алгоритм 
1. Отримати посилання на кнопки
2. Створити змінну для counter(лічильник)
3. Навісити обробник на кнопку(-)
4. Навісити обробник на кнопку(+)
5. В обробнику зменшити counter(лічильник)
*/
const [decBtn, incBtn] = document.querySelectorAll(".counterBtn");
const counterElement = document.querySelector('#counter')

let counter = 0;
counterElement.textContent =counter;

decBtn.addEventListener("click", decrementCount);
function decrementCount(event) {
  counter--;
  counterElement.textContent = counter;
}

incBtn.addEventListener("click", incrementCount);
function incrementCount(event) {
  counter++;
  counterElement.textContent = counter;
}


