// GENERAL
const container = document.querySelector(".container");
const rowsNum = 16;
const colsNum = 16;

function makeRowsAndCols(rowsNum, colsNum) {
  for (let r = 0; r < rowsNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "rows";
    for (let c = 0; c < colsNum; c++) {
      let cols = document.createElement("div");
      row.appendChild(cols).className = "grid";
    }
  }
}

makeRowsAndCols(rowsNum, colsNum);

// Game Bar
const gameBar = document.createElement("div");
gameBar.classList.add("game_bar");

const gameBarHeader = document.createElement("h1");
gameBarHeader.classList.add("game_bar_header");
gameBarHeader.textContent = "Etch-A-Sketch";
gameBar.appendChild(gameBarHeader);

const playButton = document.createElement("button");
playButton.classList.add("play_button");
playButton.textContent = "PLAY";
gameBar.appendChild(playButton);

const resetButton = document.createElement("button");
resetButton.classList.add("reset_button");
resetButton.textContent = "RESET";
gameBar.appendChild(resetButton);

container.appendChild(gameBar);

// Game Logic
let isPlaying = false;

const allDivs = container.querySelectorAll("div");
const rows = [];

allDivs.forEach((div) => {
  const row = [...div.getElementsByClassName("grid")];
  rows.push(...row);
});

playButton.addEventListener("click", () => {
  alert("Okey, try it");
  isPlaying = true;

  rows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      if (isPlaying) {
        row.style.backgroundColor = "red";
      }
    });
  });
});

resetButton.addEventListener("click", () => {
  alert("Okey, Got u");
  isPlaying = false;

  rows.forEach((row) => {
    row.style.backgroundColor = "white";
  });
});
