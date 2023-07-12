const choice = ["rock","paper","scissors"];
let gameScore = 0;
let score = 0;
let input = ""
/*computer randomly choose between rock,paper,scissors*/
function computerRandomChoice () {
    return choice[Math.floor(Math.random()*choice.length)];
}

/*ask player input of rock,paper,scissors by addEventListener*/

choiceButtons = document.querySelectorAll('.rps-container button');    
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click',clicked)
});

function clicked() {
    const choiceClass = this.classList
    switch (choiceClass.value) {
        case "rock":
            input = "rock";
        break;
        case "paper":
            input = "paper";
        break;
        case "scissors":
            input = "scissors";   
        break;
    }
    
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

/*old playerChoice() fuction using prompt
function playerChoice() {
    let input = prompt ("Rock, Paper, or Scissors: ").toString().toLowerCase();
    while (input != "rock" && input != "paper" && input != "scissors"){
        alert ("Wrong input! Please input Rock, Paper, or Scissors");
        input = prompt ("Rock, Paper, or Scissors: ").toString().toLowerCase();
    }
    return input;
}
*/

/*old function play 5 round ,track result of each round and report the winner at the end

function game(){
    for (i=0; i<5 ; i++) {
        let computerSelection = computerRandomChoice ();
        let playerSelection = input;
        playRound (playerSelection,computerSelection);
        gameScore += score
    }
    if (gameScore > 0) {
        alert ("You won!");
    }
    else if (gameScore > 0) {
        alert ("You lose!");
    }
    else {
        alert ("You drew!");
    }
    gameScore = 0
}

*/

