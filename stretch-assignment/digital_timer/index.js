let milliseconds = 0; // 8700
let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundredsEl = document.getElementById("msHundreds");
let msTensEl = document.getElementById("msTens");

let interval;

function resetTimer() {
  milliseconds = 0;
  clearInterval(interval);

  secondTens.textContent = "-";
  secondOnes.textContent = "-";
  msHundredsEl.textContent = "-";
  msTensEl.textContent = "-";

  secondTens.style.color = "black";
  secondOnes.style.color = 'black';
  msHundredsEl.style.color = 'black';
  msTensEl.style.color = 'black';

  startButton.disabled = false;
}

let startButton = document.createElement("button");
startButton.onclick = () => {
  resetTimer();
  startButton.disabled = true;

  interval = window.setInterval(() => {
    milliseconds += 10;
    let seconds = Math.floor(milliseconds / 1000);
    let tens = seconds === 10 ? 1 : 0;
    let ones = seconds === 10 ? 0 : seconds;
    let secondMilliseconds = milliseconds - seconds * 1000; // 8700 - (8 * 1000) = 750
    let msHundreds = Math.floor(secondMilliseconds / 100); // 7
    let msRemainingTens = secondMilliseconds - msHundreds * 100; // 750 - (7 * 100) = 50
    let msTens = Math.floor(msRemainingTens / 10); // 50 / 10 = 5
    secondTens.textContent = tens;
    secondOnes.textContent = ones;
    msHundredsEl.textContent = msHundreds;
    msTensEl.textContent = msTens;

    if (seconds === 10) {
      clearInterval(interval);
      startButton.disabled = false;
      secondTens.style.color = "red";
      secondOnes.style.color = 'red';
      msHundredsEl.style.color = 'red';
      msTensEl.style.color = 'red';
    }
  }, 10);
};

startButton.textContent = "Start";
document.body.appendChild(startButton);

let resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.onclick = () => {
  resetTimer();
};

document.body.appendChild(resetButton);
