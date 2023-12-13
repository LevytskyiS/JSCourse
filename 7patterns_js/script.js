//  Пример по делегированию прослушивания событий:
//  вешаем прослушиватель на родительский класс, но обрабатываем действие,
//  если событие случится на детях
// const container = document.querySelector(".js-container");
// container.addEventListener("click", onClick);

// function onClick(evt) {
//   if (!evt.target.classList.contains("js-box")) {
//     return;
//   }
//   console.log(evt.target.dataset.color);
// }

// Крестики-нолики
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const container = document.querySelector(".js-content");
const nameWinner = document.querySelector(".js-winner");

let historyX = [];
let historyY = [];
let player = "X";

container.addEventListener("click", onClick);

function createMarkup() {
  let markup = "";
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}

createMarkup();

function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains("js-item") || target.textContent) {
    return;
  }

  const id = Number(target.dataset.id);
  let result = false;
  
  if (player === "X") {
    historyX.push(id);
    // console.log(historyX);
    result = isWinner(historyX);
  } else {
    historyY.push(id);
    // console.log(historyY);
    result = isWinner(historyY);
  }
  
  const isEndGame = historyX.length + historyY.length === 9;
  target.textContent = player;

  if (result) {
    console.log(`Winner ${player}!`);
    nameWinner.textContent = `Winner ${player}!`;
    resetGame();
    return;
  } else if (isEndGame) {
    console.log("Try again.");
    resetGame();
    return;
  }

  player = player === "X" ? "O" : "X";
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

function resetGame() {
  createMarkup();
  historyX = [];
  historyY = [];
  player = "X";
}
