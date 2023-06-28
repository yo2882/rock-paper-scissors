const choice = ["rock","paper","scissors"];
let computerSelection = computerRandomChoice ();
/*ask player input of rock,paper,scissors (case insensitive)*/
let playerSelection = prompt ("Rock, Paper, or Scissors: ",).toString.toLowerCase
/*computer randomly choose between rock,paper,scissors*/
function computerRandomChoice () {
    return choice[Math.floor(Math.random()*choice.length)];
}
/*compare result of player and computer then display the result*/
function playRound (a,b) {
    let score = 0
    switch (a){
        case "rock" : 
            if (b === "rock"){score = 0}
            else if (b === "paper"){score = -1}
            else {score = 1};
            break;
        case "paper" :
            if (b === "rock"){score = 1}
            else if (b === "paper"){score = 0}
            else {score = -1};
            break;
        case "scissors" :
            if (b === "rock"){score = -1}
            else if (b === "paper"){score = 1}
            else {score = 0};
            break;
    }
    return score;
}
/*play 5 round ,track result of each round and report the winner at the end*/