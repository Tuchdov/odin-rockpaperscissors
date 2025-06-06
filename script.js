console.log("Hello World!");

// return randomly rock paper scisscors
// use random to decide between the three, use if elif else to pick the option  with math.random
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
console.log(getComputerChoice());