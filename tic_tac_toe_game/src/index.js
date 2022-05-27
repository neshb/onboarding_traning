let isPlayerX = true;
let b1 = document.getElementById("box1");
let b2 = document.getElementById("box2");
let b3 = document.getElementById("box3");
let b4 = document.getElementById("box4");
let b5 = document.getElementById("box5");
let b6 = document.getElementById("box6");
let b7 = document.getElementById("box7");
let b8 = document.getElementById("box8");
let b9 = document.getElementById("box9");

const playerPlayFun = (isPlayerX) => {
  if (isPlayerX) {
    document.getElementById("player-turn").innerHTML = "Player O";
    document.getElementById("player-turn").style.color = "#205375";
  } else {
    document.getElementById("player-turn").innerHTML = "Player X";
    document.getElementById("player-turn").style.color = "#F66B0E";
  }
};

const boxClickHandler = (box) => {
  playerPlayFun(isPlayerX);
  if (isPlayerX) {
    document.getElementById(box).innerHTML = "X";
    document.getElementById(box).style.color = "#F66B0E";
    isPlayerX = false;
  } else {
    document.getElementById(box).innerHTML = "O";
    document.getElementById(box).style.color = "#205375";
    isPlayerX = true;
  }
};

const winnerDisplayFun = (message) => {
  document.getElementById("winnerPrint").innerHTML = message;
};

const refreshFun = () => window.location.reload();
const alertFun = (message) => window.alert(message);

const winnerHelper = (message) => {
  winnerDisplayFun(message);
  alertFun(message);
  refreshFun();
};

const checkWinnerFun = (isPlayerX) => {
  let player;

  if (!isPlayerX) player = "X";
  else player = "O";

  let message = `Player ${player} won`;
  // Checking if Player  won or not and after
  if (b1.innerHTML == player && b2.innerHTML == player && b3.innerHTML == player) {
    winnerHelper(message);
  } else if (b4.innerHTML == player && b5.innerHTML == player && b6.innerHTML == player) {
    winnerHelper(message);
  } else if (b7.innerHTML == player && b8.innerHTML == player && b9.innerHTML == player) {
    winnerHelper(message);
  } else if (b1.innerHTML == player && b4.innerHTML == player && b7.innerHTML == player) {
    winnerHelper(message);
  } else if (b2.innerHTML == player && b5.innerHTML == player && b8.innerHTML == player) {
    winnerHelper(message);
  } else if (b3.innerHTML == player && b6.innerHTML == player && b9.innerHTML == player) {
    winnerHelper(message);
  } else if (b1.innerHTML == player && b5.innerHTML == player && b9.innerHTML == player) {
    winnerHelper(message);
  } else if (b3.innerHTML == player && b5.innerHTML == player && b7.innerHTML == player) {
    winnerHelper(message);
  }
};

document.getElementById("resetBtn").addEventListener("click", refreshFun);

const eventClickHelper = (event) => {
  boxClickHandler(event.target.id);
  checkWinnerFun(isPlayerX);
};

b1.addEventListener("click", eventClickHelper, { once: true });
b2.addEventListener("click", eventClickHelper, { once: true });
b3.addEventListener("click", eventClickHelper, { once: true });
b4.addEventListener("click", eventClickHelper, { once: true });
b5.addEventListener("click", eventClickHelper, { once: true });
b6.addEventListener("click", eventClickHelper, { once: true });
b7.addEventListener("click", eventClickHelper, { once: true });
b8.addEventListener("click", eventClickHelper, { once: true });
b9.addEventListener("click", eventClickHelper, { once: true });