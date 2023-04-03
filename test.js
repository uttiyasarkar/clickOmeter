// Set initial power level
let powerLevel = 0;

// Get elements from the DOM
const meterReading = document.getElementById('meter-reading');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const scoreValueEl = document.querySelector('.score-value');
let score = 0;
// Update meter reading based on power level
function updateMeter() {
  meterReading.style.width = `${powerLevel}%`;
  // Check if the meter has reached 100 and update the score
  
  if (powerLevel < 20) {
    meterReading.style.backgroundColor = 'red';
  } else if (powerLevel < 50) {
    meterReading.style.backgroundColor = 'orange';
  } else {
    meterReading.style.backgroundColor = 'green';
  }
  if (powerLevel === 100) {
    score += 100;
    powerLevel = 0;
    setInterval(function() {
        powerLevel -= 1;
        if (powerLevel < 0) {
          powerLevel = 0;
        }
        updateMeter();
      }, score);
      
  }
}
function updateScore() {
    scoreValueEl.textContent = score;
  }
  
// Increase power level when increase button is clicked
increaseBtn.addEventListener('click', function() {
  powerLevel += 10;
  if (powerLevel > 100) {
    powerLevel = 100;
  }
  updateMeter();
  updateScore();
});

// Decrease power level when decrease button is clicked
decreaseBtn.addEventListener('click', function() {
  powerLevel -= 10;
  if (powerLevel < 0) {
    powerLevel = 0;
  }
  updateMeter();
});

// Decrease power level over time
/*setInterval(function() {
  powerLevel -= 1;
  if (powerLevel < 0) {
    powerLevel = 0;
  }
  updateMeter();
}, 100);*/
