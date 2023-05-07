let gridTable = [
  ['1', '2', '3'], //0
  ['4', '5', '6'], //1
  ['7', '8', '9'] //2
];

let playerX = true;
let playerO = false;
let availableMoves = 0;
let gameOver = false;
const playerPlaying = document.querySelector('.current-player');
const winnerBoxDisplay = document.querySelector('.js-win-alert');

function playAgain() {
  playerX = true;
  playerO = false;
  availableMoves = 0;
  gameOver = false;
  playerPlaying.innerHTML = ('RED');
  playerPlaying.classList.remove('blue-player');
  winnerBoxDisplay.classList.add('win-alert-visiblity');
  winnerBoxDisplay.classList.remove('blue-player');
  winnerBoxDisplay.classList.remove('red-player');
  gridTable = [
  ['1', '2', '3'], //0
  ['4', '5', '6'], //1
  ['7', '8', '9'] //2
];
let gameBoard = document.querySelectorAll('.game-board');
  gameBoard.forEach((element) => {
    element.classList.remove('red', 'blue');
  })
}

function winningConditions() {
  if (gridTable[0][0] === gridTable[0][1] && gridTable[0][1] === gridTable[0][2]) {
    whoWins();
  } else if (gridTable[1][0] === gridTable[1][1] && gridTable[1][1] === gridTable[1][2]) {
    whoWins();
  } else if (gridTable[2][0] === gridTable[2][1] && gridTable[2][1] === gridTable[2][2]) {
    whoWins();
  } else if (gridTable[0][0] === gridTable[1][0] && gridTable[1][0] === gridTable[2][0]) {
    whoWins();
  } else if (gridTable[0][1] === gridTable[1][1] && gridTable[1][1] === gridTable[2][1]) {
    whoWins();
  } else if (gridTable[0][2] === gridTable[1][2] && gridTable[1][2] === gridTable[2][2]) {
    whoWins();
  } else if (gridTable[0][0] === gridTable[1][1] && gridTable[1][1] === gridTable[2][2]) {
    whoWins();
  } else if (gridTable[0][2] === gridTable[1][1] && gridTable[1][1] === gridTable[2][0]) {
    whoWins();
  }
};

function whoWins() {
  if (gameOver) {
    return 'Game over, press play again to play again duh';
  }
  if (playerO) {
    gameOver = true;
    playerPlaying.classList.remove('blue-player');
    playerPlaying.innerHTML = ('RED WON')
    winnerBoxDisplay.classList.remove('win-alert-visiblity');
    winnerBoxDisplay.classList.add('red-player');
    document.querySelector('.js-win-message')
      .innerHTML = 'RED PLAYER WINS!';
    return;
  } else {
    gameOver = true;
    playerPlaying.classList.add('blue-player');
    playerPlaying.innerHTML = ('BLUE WON');
    winnerBoxDisplay.classList.remove('win-alert-visiblity');
    winnerBoxDisplay.classList.add('blue-player');
    document.querySelector('.js-win-message');
    document.querySelector('.js-win-message')
    .innerHTML = 'BLUE PLAYER WINS!';
    return;
  }
}

function turns(name) {
  if (gameOver) {
    return;
  }
  if (playerX) {
    document.querySelector(name)
      .classList.add('red');
   playerO = true;
   playerX = false;
      playerPlaying.classList.add('blue-player');
      playerPlaying.innerHTML = ('BLUE');
   return 'red'
  } else {
    document.querySelector(name)
      .classList.add('blue');
   playerX = true;
   playerO = false;
   playerPlaying.classList.remove('blue-player');
   playerPlaying.innerHTML = ('RED');
  }
}

function playeGame(name) {

  if (availableMoves === 9) {
    gameOver = true;
    return alert('Game over, press play again to play again duh')
  }

  if (document.querySelector(name)
    .classList.contains('red') || document.querySelector(name)
    .classList.contains('blue')) {
    return alert(`Can't do that`);
  }

  availableMoves++;
  return turns(name);
}

//Event listeners

document.querySelector('.js-1')
  .addEventListener('click', () => {
    gridTable[0][0] = playeGame('.js-1')
    winningConditions();
  });
document.querySelector('.js-2')
  .addEventListener('click', () => {
    gridTable[0][1] = playeGame('.js-2')
    winningConditions()
  });
document.querySelector('.js-3')
  .addEventListener('click', () => {
    gridTable[0][2] = playeGame('.js-3')
    winningConditions()
  });
document.querySelector('.js-4')
  .addEventListener('click', () => {
    gridTable[1][0] = playeGame('.js-4')
    winningConditions()
  });
document.querySelector('.js-5')
  .addEventListener('click', () => {
    gridTable[1][1] = playeGame('.js-5')
    winningConditions()
  });
document.querySelector('.js-6')
  .addEventListener('click', () => {
    gridTable[1][2] = playeGame('.js-6')
    winningConditions()
  });
document.querySelector('.js-7')
  .addEventListener('click', () => {
    gridTable[2][0] = playeGame('.js-7')
    winningConditions()
  });
document.querySelector('.js-8')
  .addEventListener('click', () => {
    gridTable[2][1] = playeGame('.js-8')
    winningConditions()
  });
document.querySelector('.js-9')
  .addEventListener('click', () => {
    gridTable[2][2] = playeGame('.js-9')
    winningConditions()
  });

document.querySelector('.js-play-again')
  .addEventListener('click', () => {
    playAgain();
  });
