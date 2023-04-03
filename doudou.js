const POWER_INCREASE_AMOUNT = 5;
const POWER_DECREASE_AMOUNT = 1;
const POWER_DECREASE_INTERVAL = 1000; // 1 second

let powerLevel = 0;
let powerMeter = document.querySelector('.power-meter');
let btnIncrease = document.querySelector('.btn-increase');
let btnDecrease = document.querySelector('.btn-decrease');

btnIncrease.addEventListener('click', () => {
  powerLevel += POWER_INCREASE_AMOUNT;
  updatePowerMeter();
});

btnDecrease.addEventListener('click', () => {
  powerLevel -= POWER_DECREASE_AMOUNT;
  updatePowerMeter();
});

function updatePowerMeter() {
    if (powerLevel > 100) {
        powerLevel = 100;
      }
  powerMeter.innerText = `${powerLevel}%`;
}

setInterval(() => {
  if (powerLevel > 0) {
    powerLevel -= POWER_DECREASE_AMOUNT;
    updatePowerMeter();
  }
}, POWER_DECREASE_INTERVAL);
