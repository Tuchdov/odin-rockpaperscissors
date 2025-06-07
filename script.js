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
function playRound() {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    humanScoreRound = 0 
    computerScoreRound = 0
    // now compare and decide who wins

    // lets start with human wins
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log(`You Win this round! ${humanChoice} beats ${computerChoice}`)
        humanScoreRound += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You Win this round! ${humanChoice} beats ${computerChoice}`)
        humanScoreRound += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log(`You Win this round! ${humanChoice} beats ${computerChoice}`)
        humanScoreRound += 1;
    }
    // now computer is wining
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You Lose this round! ${computerChoice} beats ${humanChoice}`)
        computerScoreRound += 1;        
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log(`You Lose this round! ${computerChoice} beats ${humanChoice}`)
        computerScoreRound += 1;        
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log(`You Lose this round! ${computerChoice} beats ${humanChoice}`)
        computerScoreRound += 1;        
    }
    else {
        console.log("Its a tie, try again!")
    }

    if (computerScoreRound > humanScoreRound){
        return 'computer';
    }
    else if (computerScoreRound < humanScoreRound ){
        return 'human';
    }
    else {
        return 'tie';
    }

}
// add score, then reurn the name of the winner , then put score to this winner
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// create a game function you play 5 rounds in the end tell who won 
function playGame() {
    let humanScore = 0;
    let computerScore = 0; 
    let gameNumber = 0



    while (gameNumber < 5) { // if its 5 this will ony play 4 times
            // humanChoice = getHumanChoice().toLowerCase();
            // computerChoice = getComputerChoice();
            getDecision = playRound(); //result of round
            if (getDecision === 'computer') {
                computerScore += 1;
            }
            else if (getDecision === 'human'){
                humanScore += 1;
            }
        gameNumber += 1;
    }

    // decide who is the winner
    if (humanScore > computerScore) {
        console.log('you won, congratulations!');
    }
    else if (humanScore < computerScore) {
        console.log('you lose, long live the machines!');
    }
    else {
        console.log('its a tie, the friendship won!');
    }

}
console.log(playGame());