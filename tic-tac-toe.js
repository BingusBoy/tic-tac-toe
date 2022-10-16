const gameInfo = (() => {
  const view = document.getElementsByClassName("boardSpace");
  const logBoard = () => {
    console.log(board);
  };

  // const clearBoard = () => {
  //   view[0].textContent = "";
  //   view[1].textContent = "";
  //   view[2].textContent = "";
  //   view[3].textContent = "";
  //   view[4].textContent = "";
  //   view[5].textContent = "";
  //   view[6].textContent = "";
  //   view[7].textContent = "";
  // };
  
  const getState = () => {
    return [
      [view[0].textContent, view[1].textContent, view[2].textContent],
      [view[3].textContent, view[4].textContent, view[5].textContent],
      [view[6].textContent, view[7].textContent, view[8].textContent]
    ]
  }
  // view.forEach(button => {
  //   button.addEventListener("click", updateSpace(button, ))
  // })
  
  const updateSpace = (x, y) => {
    x.textContent = y;
  }
  
  return {logBoard, getState, updateSpace};
})();

const viewController = (() => {
  const view = document.getElementsByClassName("boardSpace");
  const clearBoard = () => {
    view[0].textContent = "";
    view[1].textContent = "";
    view[2].textContent = "";
    view[3].textContent = "";
    view[4].textContent = "";
    view[5].textContent = "";
    view[6].textContent = "";
    view[7].textContent = "";
  };

  return {clearBoard}
})();

const gameController = (() => {
  let isInProgress = true
  let currentPlayer = ""

  const getStartPlayer = () =>{
    if (Math.floor(Math.random() * 2) == 0){
      return "X"
    }else{
      return "O"
    }
  }

  const initializeGame = () => {
    currentPlayer = getStartPlayer();
  }

  return {getStartPlayer, initializeGame, currentPlayer};
})();

const spaceButton = document.getElementsByClassName("boardSpace")
// spaceButton.forEach(button => {
//   button.addEventListener("click", )
// })

const resetButton = document.querySelector(".reset")
resetButton.addEventListener("click", viewController.clearBoard())

gameController.initializeGame()