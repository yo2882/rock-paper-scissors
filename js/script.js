const choice = ["rock","paper","scissors"];
let computerSelection = computerRandomChoice ();
/*ask player input of rock,paper,scissors (case insensitive)*/
let playerSelection = prompt ("Rock, Paper, or Scissors: ").toLowerCase();
/*computer randomly choose between rock,paper,scissors*/
function computerRandomChoice () {
    return choice[Math.floor(Math.random()*choice.length)];
}
/*compare result of player and computer then display the result*/
function playRound (a,b) {
    if(a === "rock" || a ===  "paper" || a === "scissors"){
        let score = 0
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
    else {
        alert ("Wrong input! Please input Rock, Paper, or Scissors");
    }
}
/*play 5 round ,track result of each round and report the winner at the end*/
playRound (playerSelection,computerSelection);