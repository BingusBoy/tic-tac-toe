// Tic-Tac-Toe by pretzelogic 2022
const gameInfo = (() => {
  // Here is where changing and getting info happens
  const view = document.getElementsByClassName("boardSpace");
  const info = document.querySelector(".infoView")
  let currentPlayer = "";


  const showInfo = (text) =>{
    info.textContent = text;
  };

  const showCurrentPlayer = () => {
    showInfo(`${gameInfo.currentPlayer}'s turn`)
  }

  const showWinner = () => {
    showInfo(`${gameInfo.currentPlayer} wins!`)
  }
  
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
    showCurrentPlayer()
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
    if (gameController.isInProgress == "false"){
      return
    }
    let i = parseInt(e.target.getAttribute("boardIndex"));
    if (hasPlaced[i] == false) {
      e.target.textContent = gameInfo.currentPlayer;
      hasPlaced[i] = true;
      gameController.conditionCheck();
      gameController.nextTurn();
    }
  };

  const clearView = () => {

    for (let i = 0; i < view.length; i++) {
      view[i].textContent= "";
    }

  };
  

  return {
    getState,
    updateSpace,
    showInfo,
    showCurrentPlayer,
    showWinner,
    clearView,
    currentPlayer,
    hasPlaced,
    getStartPlayer,
    changePlayer,
  };
})();


const gameController = (() => {
  // Here is where the game flow is determined
  let isInProgress = false;
  const view = document.getElementsByClassName("boardSpace");
  const resetButton = document.querySelector(".reset");

  const nextTurn = () => {
    if(isInProgress == false){
      return
    }
    gameInfo.changePlayer();
    gameInfo.showCurrentPlayer()
  };

  const conditionCheck = () => {
    let state = gameInfo.getState()
    let placed = 0
    //Check if all placed
    for (let i = 0; i < gameInfo.hasPlaced.length; i++) {
      if(gameInfo.hasPlaced[i] == true){
        placed++
      }
    }
    if (placed == 9){
      isInProgress = false;
      gameInfo.showInfo("Draw!")
    }
    // Check rows
    for (let i = 0; i <= 2; i++) {
      if(state[i][0] == gameInfo.currentPlayer 
        && state[i][1] == gameInfo.currentPlayer
        && state[i][2] == gameInfo.currentPlayer){
      gameInfo.showWinner()
      isInProgress = false
     }
    }
    // Check columns
    for(let i = 0; i <= 2; i++){
      if(state[0][i] == gameInfo.currentPlayer 
        && state[1][i] == gameInfo.currentPlayer
        && state[2][i] == gameInfo.currentPlayer){
          gameInfo.showWinner()
          isInProgress = false;
        }
    }
  }

  const initializeGame = () => {
    gameInfo.currentPlayer = gameInfo.getStartPlayer();
    
    for (let i = 0; i < view.length; i++) {
      view[i].addEventListener("click", gameInfo.updateSpace);
    }
    
    resetButton.addEventListener("click", resetGame);
    gameInfo.showCurrentPlayer()
    isInProgress = true;
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
