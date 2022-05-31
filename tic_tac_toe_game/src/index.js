let isPlayerX = true;
let boxes = {};
const playerX = {
  name: "Player X",
  color: "#F66B0E",
  value: "X",
};
const playerO = {
  name: "Player O",
  color: "#205375",
  value: "O",
};
const elementData = document.getElementsByClassName("box"); 
(() => {
  for (let i = 0; i < elementData.length; i++) {
    boxes[elementData[i].id] = {
      id: elementData[i].id,
      value: elementData[i].innerHTML,
    };
  }
})();

// this function is created such a way that no need to modify it just use it
// this is example of open close principle of SOLID

const changeValueAndColor = (id, value, color) => {
  document.getElementById(id).innerHTML = value;
  document.getElementById(id).style.color = color;
};

// this function is only responsible for player display method
// this is called as single responsible principle

const playerDisplay = isPlayerX => {
  const id = "player-turn";
  if (isPlayerX) changeValueAndColor(id, playerO.name, playerO.color);
  else changeValueAndColor(id, playerX.name, playerX.color);
};

const isBoxValue = (boxId, playerValue) => {
  if (boxes[boxId].value === "") {
    boxes[boxId].value = playerValue;
    return false;
  }
  return true;
};

const boxClickHandler = boxId => {
  if (isPlayerX && !isBoxValue(boxId, playerX.value)) {
    playerDisplay(isPlayerX);
    changeValueAndColor(boxId, playerX.value, playerX.color);
    isPlayerX = false;
  } else if (!isPlayerX && !isBoxValue(boxId, playerO.value)) {
    playerDisplay(isPlayerX);
    changeValueAndColor(boxId, playerO.value, playerO.color);
    isPlayerX = true;
  }
};

const clearBoxValue = () => {
  for (let i = 0; i < elementData.length; i++) {
    elementData[i].innerHTML = "";
    boxes[elementData[i].id] = { ...boxes[elementData[i].id], value: "" };
  }
};

const resetGame = () => {
  clearBoxValue();
  changeValueAndColor("winnerPrint", "", "white");
  isPlayerX = true;
  playerDisplay(!isPlayerX);
};

const winnerDisplay = message => {
  changeValueAndColor("winnerPrint", message, "white");
  setTimeout(() => {
    resetGame();
  }, 2000);
};

const checkLeftToRight = (matrix_size, player, boxArray) => {
  for (let i = 0; i < boxArray.length; i = i + matrix_size) {
    let count = 0;
    let isWinner = true;
    for (let k = i; k < boxArray.length; k++) {
      if (count < matrix_size) {
        count += 1;
        if (boxArray[k].value !== player) {
          isWinner = false;
          break;
        }
      }
    }
    if (isWinner) return true;
  }
  return false;
};

const checkTopToBottom = (matrix_size, player, boxArray) => {
  for (let i = 0; i < matrix_size; i = i + 1) {
    let count = 0;
    let isWinner = true;
    for (let k = i; k < boxArray.length; k = k + matrix_size) {
      if (count < matrix_size) {
        count += 1;
        if (boxArray[k].value !== player) {
          isWinner = false;
          break;
        }
      }
    }
    if (isWinner) return true;
  }
  return false;
};

const checkLeftDiagonal = (matrix_size, player, boxArray) => {
  for (let i = 0; i < boxArray.length; i = i + matrix_size + 1) {
    if (boxArray[i].value !== player) return false;
  }
  return true;
};

const checkRightDiagonal = (matrix_size, player, boxArray) => {
  for (
    let i = 0 + matrix_size - 1;
    i < boxArray.length - 1;
    i = i + matrix_size - 1
  ) {
    if (boxArray[i].value !== player) return false;
  }
  return true;
};

const checkWinner = isPlayerX => {
  let player;

  if (!isPlayerX) player = "X";
  else player = "O";
  const matrix_size = Math.sqrt(elementData.length);
  const boxArray = Object.values(boxes);
  // Checking if Player  won or not and after
  // check left to right
  const isLeftRight = checkLeftToRight(matrix_size, player, boxArray);
  // check for top to bottom
  const isTopToBottom = checkTopToBottom(matrix_size, player, boxArray);
  // check for left diagonal
  const isLeftDiagonal = checkLeftDiagonal(matrix_size, player, boxArray);
  // check for right diagonal
  const isRightDiagonal = checkRightDiagonal(matrix_size, player, boxArray);

  if (isLeftRight || isTopToBottom || isLeftDiagonal || isRightDiagonal) {
    winnerDisplay(`Player ${player} won`);
  }
};

const eventClickHelper = (event) => {
  boxClickHandler(event.target.id);
  checkWinner(isPlayerX);
};
