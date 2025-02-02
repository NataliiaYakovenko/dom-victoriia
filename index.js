"use strict";

/*
Алгоритм
- start - запустити накопичення мілісекунд
- stop - зупинити накопичення мілісекунди
- rest - скинути накопичені мілісекунди
*/

//let timer = new Date(0);
let timer = 0;
let intervalId = null;

const timeEl = document.querySelector(".timer");
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(
  ".btn-container > button"
);

startBtn.onclick = startBtnHandler;
function startBtnHandler() {
  function tick() {
    timer++;
    updateTime(timer);
    console.log(timer);
  }
  if (!intervalId) {
    intervalId = setInterval(tick, 1);}
}

stopBtn.onclick = stopBtnHandler;
function stopBtnHandler() {
  clearInterval(intervalId);
  intervalId = null;
}

resetBtn.onclick = resetBtnHandler;
function resetBtnHandler() {
  timer = 0;
  updateTime(timer);
}

function updateTime(timer) {
  timeEl.textContent = timer;
}
