console.log("Hello World!");

// return randomly rock paper scisscors
// use random to decide between the three, use if elif else to pick the option with math.random
function getComputerChoice() {
    let rand_num = Math.random();
    let computer_answer = "";

    if (rand_num <= 0.333) {
        computer_answer = "rock";
    }
    else if (rand_num > 0.333 && rand_num <= 0.666) {
        computer_answer = "paper";
    }
    else {
        computer_answer = "scissors";
    }
    return computer_answer;
}
// console.log(getComputerChoice());

// prompt the user to choose an option, assume that he will always chose a valid one.

function getHumanChoice() {
    let choice = prompt("Choose your move: rock, paper or scissors?");
    return choice;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

// compare the user's and computer choice 
function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    
    // now compare and decide who wins

    // lets start with human wins
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1;
    }
    // now computer is wining
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1;        
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1;        
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1;        
    }
    else {
        console.log("Its a tie, try again!")
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);