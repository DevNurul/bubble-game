let score = 0;
let timer = 60;
let rdm = 0;

function createBubble() {
  let clutter = "";
  for (let i = 1; i <= 152; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.getElementById("pbtm").innerHTML = clutter;
}

function runTimer() {
  const timeInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeInt);
      document.querySelector("#pbtm").innerHTML = `Your score is ${score}`;
    }
  }, 1000);
}

function hitRn() {
  rdm = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = rdm;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.getElementById("pbtm").addEventListener("click", function (detl) {
  if (detl.target.classList.contains("bubble")) {
    if (Number(detl.target.textContent) === rdm) {
      increaseScore();
      hitRn();
      createBubble();
    }
  }
});


runTimer();
hitRn();
createBubble();
