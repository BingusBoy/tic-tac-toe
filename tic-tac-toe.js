const gameInfo = (() => {
  const view = document.getElementsByClassName("boardSpace");
  let currentPlayer = "";
  const hasPlaced = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const logBoard = () => {
    console.log(board);
  };
  const getStartPlayer = () => {
    if (Math.floor(Math.random() * 2) == 0) {
      return "X";
    } else {
      return "O";
    }
  };

  const changePlayer = () => {
    if (getCurrentPlayer() == "X") {
      gameInfo.currentPlayer = "O";
    } else if (getCurrentPlayer() == "O") {
      gameInfo.currentPlayer = "X";
    }
  };

  const getCurrentPlayer = () => gameInfo.currentPlayer;

  const getState = () => {
    return [
      [view[0].textContent, view[1].textContent, view[2].textContent],
      [view[3].textContent, view[4].textContent, view[5].textContent],
      [view[6].textContent, view[7].textContent, view[8].textContent],
    ];
  };

  const updateSpace = (e) => {
    let i = parseInt(e.target.getAttribute("boardIndex"));
    if (hasPlaced[i] == false) {
      e.target.textContent = gameInfo.currentPlayer;
      hasPlaced[i] = true;
      gameController.nextTurn();
    }
  };

  const clearView = () => {

    for (let i = 0; i < view.length; i++) {
      view[i].textContent= "";
    }

  };
  

  return {
    logBoard,
    getState,
    updateSpace,
    clearView,
    currentPlayer,
    hasPlaced,
    getStartPlayer,
    changePlayer,
  };
})();


const gameController = (() => {
  let isInProgress = true;
  const view = document.getElementsByClassName("boardSpace");
  const resetButton = document.querySelector(".reset");

  const nextTurn = () => {
    gameInfo.changePlayer();
  };

  const conditionCheck = () => {
    let state = gameInfo.getState()
    if(state[0][0] && state[0][1] && state[0][2] == currentPlayer){
      
    }
    
  }

  const initializeGame = () => {
    gameInfo.currentPlayer = gameInfo.getStartPlayer();

    for (let i = 0; i < view.length; i++) {
      view[i].addEventListener("click", gameInfo.updateSpace);
    }

    resetButton.addEventListener("click", resetGame);
  };

  const resetGame = () => {
    gameInfo.clearView()
    for (let i = 0; i < gameInfo.hasPlaced.length; i++) {
      gameInfo.hasPlaced[i] = false
    }

   initializeGame()

  }

  return { initializeGame, nextTurn, resetGame, conditionCheck};
})();

gameController.initializeGame();
