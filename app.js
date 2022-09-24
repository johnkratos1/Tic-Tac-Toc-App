const boxes = Array.from(document.getElementsByClassName("box"));
const btn = document.querySelector(".reset");
const display = document.getElementById("display");
const reset = document.getElementById("reset");

let inputs = [];
const playerOne = "X";
const playerTwo = "O";
let currentPlayer = playerOne;
let isPlaying = true;

const boxClicked = (e) => {
  const id = e.target.id;
  if (!inputs[id]) {
    inputs[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    playerHasWon();
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  }
};

const playerHasWon = () => {
  if (inputs[0] === currentPlayer) {
    if (inputs[1] === currentPlayer && inputs[2] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
    if (inputs[3] === currentPlayer && inputs[6] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
    if (inputs[4] === currentPlayer && inputs[8] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
  }
  if (inputs[8] === currentPlayer) {
    if (inputs[2] === currentPlayer && inputs[5] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
    if (inputs[6] === currentPlayer && inputs[7] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
  }
  if (inputs[4] === currentPlayer) {
    if (inputs[1] === currentPlayer && inputs[7] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
    if (inputs[3] === currentPlayer && inputs[5] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
    if (inputs[2] === currentPlayer && inputs[6] === currentPlayer) {
      display.innerHTML = `${currentPlayer} Has Won!`;
      return;
    }
  }
};

function gameBox() {
  boxes.forEach((box) => {
    box.addEventListener("click", boxClicked);
  });
}

function restart() {
  inputs = [];
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  display.innerText = "Start Game";
}
reset.addEventListener("click", restart);
restart();
gameBox();
