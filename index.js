/*Алгоритм 
1. Отримати посилання на кнопки
2. Створити змінну для counter(лічильник)
3. Навісити обробник на кнопку(-)
4. Навісити обробник на кнопку(+)
5. В обробнику зменшити counter(лічильник)
*/

//Model - данні + методи роботи з ним
class Counter {
  constructor(counter) {
    this.counter = counter;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}

//ViewModel
const [decBtn, incBtn] = document.querySelectorAll(".counterBtn");
const counterElement = document.querySelector("#counter");

const count = new Counter(0);

updateView();

decBtn.addEventListener("click", decrementCount);
function decrementCount(event) {
  count.decrement();
  updateView();
}

incBtn.addEventListener("click", incrementCount);
function incrementCount(event) {
  count.increment();
  updateView();
}

function updateView() {
  counterElement.textContent = count.counter;
}
