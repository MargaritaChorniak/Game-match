 let matchesLeft = 25;
 let currentPlayer = "player";

 // Function to update the game board
 function updateGameBoard() {
     const matchesContainer = document.getElementById("matches-container");
     matchesContainer.innerHTML = "";
     for (let i = 0; i < matchesLeft; i++) {
         const match = document.createElement("div");
         match.className = "match";
         matchesContainer.appendChild(match);
     }
 }

 // Function to switch the player turn
 function switchTurn() {
     currentPlayer = currentPlayer === "player" ? "AI" : "player";
     const playerTurn = document.getElementById("player-turn");
     playerTurn.style.display = currentPlayer === "player" ? "block" : "none";
     const resultDiv = document.getElementById("result");
     resultDiv.textContent = "";
     if (currentPlayer === "AI") {
         setTimeout(makeAITurn, 3000);
         resultDiv.textContent = "AI turn...";
     }
 }

 // Function to handle player turn
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

 // Function to handle AI turn
 function makeAITurn() {
     const aiNum = Math.floor(Math.random() * 3) + 1;
     matchesLeft -= aiNum;
     updateGameBoard();
     if (matchesLeft === 0) {
         showResult();
     } else {
         switchTurn();
     }
 }

 // Function to display game result
 function showResult() {
     const resultDiv = document.getElementById("result");
     if (matchesLeft % 2 === 0) {
         resultDiv.textContent = currentPlayer === "player" ? "You Win!" : "AI Wins!";
     } else {
         resultDiv.textContent = currentPlayer === "player" ? "AI Wins!" : "You Win!";
     }
     
 }

 // Initialize the game board
 updateGameBoard();
