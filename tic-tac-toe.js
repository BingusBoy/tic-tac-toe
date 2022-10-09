const gameInfo = (() => {
  const board = document.getElementsByClassName("boardSpace");
  const logBoard = () => {
    console.log(board);
  };
  return { board, logBoard };
})();

const gameController = (() => {
  const clearBoard = () => {
    gameInfo.board[0].textContent = "";
    gameInfo.board[1].textContent = "";
    gameInfo.board[2].textContent = "";
    gameInfo.board[3].textContent = "";
    gameInfo.board[4].textContent = "";
    gameInfo.board[5].textContent = "";
    gameInfo.board[6].textContent = "";
    gameInfo.board[7].textContent = "";
  };
  return { clearBoard };
})();
const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", () => {
    gameController.clearBoard()
})