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
console.log(getComputerChoice())



function getHumanChoice() {
    let humChoice = prompt("Choose rock, paper or scissors and type it here");
    let regex1 = /rock/i;
    let regex2 = /paper/i;
    let regex3 = /scissors/i;
    if (humChoice.match(regex1)) return "rock";
    else if (humChoice.match(regex2)) return "paper";
    else if (humChoice.match(regex3)) return "scissors";
    else {
        alert("Please type correctly");
    }

}
console.log(getHumanChoice()) 
// need to fix showing of this function in console 

function playRound(humChoice, compChoice) {
    if (compChoice === "rock")
     if (humChoice === "paper")
      console.log("You won")

    if (compChoice === "scissors")
     if (humChoice === "paper")
      console.log("I won")

    if (compChoice === "paper")
        if (humChoice === "paper")
         console.log("It's draw")

    if (compChoice === "rock")
        if (humChoice === "rock")
         console.log("It's a draw")

    if (compChoice === "scissors")
        if (humChoice === "rock")
         console.log("You won")

    if (compChoice === "paper")
        if (humChoice === "rock")
         console.log("I won")

    if (compChoice === "scissors")
        if (humChoice === "scissors")
         console.log("It's a draw")

    if (compChoice === "rock")
        if (humChoice === "scissors")
         console.log("I won")
    
    if (compChoice === "paper")
        if (humChoice === "scissors")
         console.log("You won")

}
  
  playRound(humanSelection, computerSelection);
  










