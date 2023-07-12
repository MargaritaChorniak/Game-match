let matchesLeft = 25;
let currentPlayer = "player";

function updateGameBoard() {
    const matchesContainer = document.getElementById("matches-container");
    matchesContainer.innerHTML = "";
    for (let i = 0; i < matchesLeft; i++) {
        const match = document.createElement("div");
        match.className = "match";
        matchesContainer.appendChild(match);
    }
}

function switchTurn() {
    currentPlayer = currentPlayer === "player" ? "AI" : "player";
    const playerTurn = document.getElementById("player-turn");
    playerTurn.style.display = currentPlayer === "player" ? "block" : "none";
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "";
    if (currentPlayer === "AI") {
        setTimeout(makeAITurn, 3000);
        resultDiv.textContent = `AI takes matches`;
    }
}

function takeMatches(num) {
    if (num >= 1 && num <= 3 && matchesLeft - num >= 0) {
        matchesLeft -= num;
        updateGameBoard();
        if (matchesLeft === 0) {
            showResult();
        } else {
            switchTurn();
        }
    }
}

function makeAITurn() {
  let aiNum;
  if ((matchesLeft - 1) % 4 === 0) {
    aiNum = 1;
  } else if ((matchesLeft - 2) % 4 === 0) {
    aiNum = 2;
  } else {
    aiNum = 3;
  };

  matchesLeft -= aiNum;
  updateGameBoard();
  if (matchesLeft === 0) {
    showResult();
  } else {
    switchTurn();
  }
 }

 function showResult() {
     const resultDiv = document.getElementById("result");
     if (matchesLeft % 2 === 0) {
         resultDiv.textContent = currentPlayer === "player" ? "You Win!" : "AI Wins!";
     } else {
         resultDiv.textContent = currentPlayer === "player" ? "AI Wins!" : "You Win!";
     }
 }

 function restartGame() {
  matchesLeft = 25;
  isPlayerTurn = true;
  updateGameBoard();
}

 updateGameBoard();
