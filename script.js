
// Game starts!
function playGame () {
    console.log("Game starts!")

var humanScore = 0
var computerScore = 0

function playRound() {
    
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();  

function getComputerChoice() {
    const compChoice = Math.floor(Math.random () * 3) + 1;  
    if (compChoice === 1) return "rock";
    else if (compChoice === 2) return "paper";
    else return "scissors";  
}
console.log("ComputerSelectionReturn", computerSelection); //show compChoice as a string

function getHumanChoice() {
    let humChoice = prompt("Choose rock, paper or scissors and type it here", "paper"); //after comma - make default input
    console.log("Human choice:", humChoice); //show input from prompt BUT not the result of return
    let regex1 = /rock/i;
    let regex2 = /paper/i;
    let regex3 = /scissors/i;
    if (humChoice.match(regex1)) return "rock";
    else if (humChoice.match(regex2)) return "paper";
    else if (humChoice.match(regex3)) return "scissors";
    else {
        alert("Please type correctly"); 
        return getHumanChoice(); //make it show prompt again 
    }
}
console.log("HumanSelectionReturn", humanSelection);


function roundResult(computerSelection, humanSelection) {
if (computerSelection === humanSelection) {
    console.log("It's a draw");
} else if (computerSelection === "rock" && humanSelection === "paper") {
    humanScore = humanScore + 1; //counter for score
    console.log("Hum won, pap beats rock");
} else if (computerSelection === "rock" && humanSelection === "scissors") {
    computerScore = computerScore + 1;
    console.log("Comp won, rock beats sc");
} else if (computerSelection === "paper" && humanSelection === "rock") {
    computerScore = computerScore + 1;
    console.log("Comp won, pap beats rock");
} else if (computerSelection === "paper" && humanSelection === "scissors") {
    humanScore = humanScore + 1;
    console.log("Hum won, sc beats pap");
} else if (computerSelection === "scissors" && humanSelection === "rock") {
    humanScore = humanScore + 1;
    console.log("Hum won, rock beats sc");
} else if (computerSelection === "scissors" && humanSelection === "paper") {
    computerScore = computerScore + 1;
    console.log("Comp won, sc beats pap");
}
} 

roundResult(computerSelection, humanSelection)
    console.log("ComputerScore:", computerScore, "HumanScore:", humanScore); //Who won message.
    // return playRound();
}    
    

// Round 1
console.log("Round 1 starts!")
playRound();

// Round 2
console.log("Round 2 starts!")
playRound();

// Round 3
console.log("Round 3 starts!")
playRound();

// Round 4
console.log("Round 4 starts!")
playRound();

// Round 5
console.log("Round 5 starts!")
playRound();

// Results summary
function resultOfTheGame() {
    if (computerScore > humanScore) {
        console.log("Computer won! ComputerScore:", computerScore, "HumanScore:", humanScore);
    } else if (computerScore < humanScore) {
        console.log("Human won! ComputerScore:", computerScore, "HumanScore:", humanScore);
    } else {console.log("It's a draw! ComputerScore:", computerScore, "HumanScore:", humanScore);}
}
resultOfTheGame(computerScore, humanScore);

} //end of the game

playGame();


