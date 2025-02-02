"use strict";

/*
Алгоритм
- start - запустити накопичення мілісекунд
- stop - зупинити накопичення мілісекунди
- rest - скинути накопичені мілісекунди
*/

let timer = new Date(0);
let intervalId = null;

const timeEl = document.querySelector(".timer");
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(
  ".btn-container > button"
);

updateTime(timer);

startBtn.onclick = startBtnHandler;
function startBtnHandler() {
  const DELAY = 100;
  function tick() {
    timer.setMilliseconds(timer.getMilliseconds()+DELAY)
    updateTime(timer);
    console.log(timer);
  }
  if (!intervalId) {
    intervalId = setInterval(tick, DELAY);}
}

stopBtn.onclick = stopBtnHandler;
function stopBtnHandler() {
  clearInterval(intervalId);
  intervalId = null;
}

resetBtn.onclick = resetBtnHandler;
function resetBtnHandler() {
  timer = new Date(0);
  updateTime(timer);
}

function updateTime(timer) {
  timeEl.textContent = `${timer.getMinutes()}:${timer.getSeconds()}:${timer.getMilliseconds()}`;
}
