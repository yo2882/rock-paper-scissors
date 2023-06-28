const choice = ["rock","paper","scissors"];
let gameScore = 0;
let score = 0;

/*computer randomly choose between rock,paper,scissors*/
function computerRandomChoice () {
    return choice[Math.floor(Math.random()*choice.length)];
}

/*ask player input of rock,paper,scissors (case insensitive)*/
function playerChoice() {
    let input = prompt ("Rock, Paper, or Scissors: ").toString().toLowerCase();
    while (input != "rock" && input != "paper" && input != "scissors"){
        alert ("Wrong input! Please input Rock, Paper, or Scissors");
        input = prompt ("Rock, Paper, or Scissors: ").toString().toLowerCase();
    }
    return input;
}

/*compare result of player and computer then display the result*/
function playRound (a,b) {
    switch (a){
        case "rock" : 
            if (b === "rock") {score = 0}
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
    switch(score){
        case 1 :
            alert ("You win the round!");
            break;
        case 0 :
            alert ("You draw the round!");
            break;
        case -1 :
            alert ("You lose the round!");
            break;
    } 
    return score;
}

/*play 5 round ,track result of each round and report the winner at the end*/
for (i=0; i<5 ; i++) {
    let computerSelection = computerRandomChoice ();
    let playerSelection = playerChoice();
    playerSelection = playerSelection.toLowerCase();
    playRound (playerSelection,computerSelection);
    gameScore += score
}
