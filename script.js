var humanScore = 0
var computerScore = 0


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
    let humChoice = prompt("Choose rock, paper or scissors and type it here", "rock"); //after comma - make default input
    console.log("Human choice:", humChoice); //show input from prompt BUT not the result of return
    let regex1 = /rock/i;
    let regex2 = /paper/i;
    let regex3 = /scissors/i;
    if (humChoice.match(regex1)) return "rock";
    else if (humChoice.match(regex2)) return "paper";
    else if (humChoice.match(regex3)) return "scissors";
    else {
        alert("Please type correctly"); //make it show prompt again 
    // getHumanChoice(); Get error, no return
    }
}
console.log("HumanSelectionReturn", humanSelection);


function playRound(computerSelection, humanSelection) {
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
playRound(computerSelection, humanSelection); //Who won message. Add prompt in play Round, to start new round.

playRound(computerSelection, humanSelection);

console.log();

console.log("ComputerScore:", computerScore, "HumanScore:", humanScore);

// function playGame () {
    
//     let round = //playgame???;

// //     for (let i = 1; i <= 5; i++) {
// //   console.log(i);
// //     } make a loop for 5 rounds

// }







