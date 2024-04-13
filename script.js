let timer;
let time = 0;
let running = false;

function startStopwatch() {
  if (!running) {
    timer = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  running = false;
}

function resetStopwatch() {
  clearInterval(timer);
  running = false;
  time = 0;
  updateDisplay();
  document.querySelector('.laps').innerHTML = '';
}

function updateDisplay() {
  time++;
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const display = document.querySelector('.display');
  display.textContent = ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};
}

function lap() {
  const display = document.querySelector('.display').textContent;
  const li = document.createElement('li');
  li.textContent = display;
  document.querySelector('.laps').appendChild(li);
}
