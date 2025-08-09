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



// compare the user's and computer choice 

// add score, then reurn the name of the winner , then put score to this winner
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// create a game function you play 5 rounds in the end tell who won 
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0; 
//     let gameNumber = 0

// For now, remove the logic that plays exactly five rounds.
// Create three buttons, one for each selection.

//  that call your playRound function with the correct playerSelection every time a button is clicked.
//  (you can keep the console.logs for this step)
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

// Add an event listener to the buttons
btnRock.addEventListener("click",() => {
    playRound('rock');
});

btnPaper.addEventListener("click", () => {
  playRound('paper');
});

btnScissors.addEventListener("click", () => {
  playRound('scissors');
});

//Add a div for displaying results and change all of your console.logs into DOM method

// inside the div we should see the results and they need to be updated
const resultsDiv = document.getElementById('results');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// helper function to update the score.
function updateScore() {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 5) {
        resultsDiv.textContent = 'You are the winner of the game!';
        // Optional: Disable buttons to end the game
        // For example:
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    } else if (computerScore === 5) {
        resultsDiv.textContent = 'The computer is the winner of the game!';
        // Optional: Disable buttons
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
}



function playRound(choice) {
    humanChoice = choice;
    computerChoice = getComputerChoice();

    // now compare and decide who wins

    // lets start with human wins
    if (humanChoice === "rock" && computerChoice === "scissors"){
        resultsDiv.textContent = `You Win this round! ${humanChoice} beats ${computerChoice}`;
        playerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        resultsDiv.textContent = `You Win this round! ${humanChoice} beats ${computerChoice}`;
        playerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        resultsDiv.textContent = `You Win this round! ${humanChoice} beats ${computerChoice}`;
        playerScore += 1;
    }
    // now computer is wining
    else if (humanChoice === "scissors" && computerChoice === "rock"){
          resultsDiv.textContent = `You Lose this round! ${computerChoice} beats ${humanChoice}`
        computerScore += 1;        
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
          resultsDiv.textContent = `You Lose this round! ${computerChoice} beats ${humanChoice}`
        computerScore += 1;        
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
          resultsDiv.textContent = `You Lose this round! ${computerChoice} beats ${humanChoice}`
        computerScore += 1;        
    }
    else {
        resultsDiv.textContent = `It's a tie! both chose ${computerChoice}`
    }
        // Update the score on the page
    updateScore();

    // Check for a winner after each round
    checkWinner();

}