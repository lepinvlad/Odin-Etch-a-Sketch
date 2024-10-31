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
