const choice = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let score = 0;
let input = ""

/*Display the score*/
const computerScoreDisplay = document.querySelector('.computer-choice .score');
const playerScoreDisplay = document.querySelector('.player-choice .score');
playerScoreDisplay.textContent = playerScore; //add to display 0 score before playing
computerScoreDisplay.textContent = computerScore; //add to display 0 score before playing

/*computer randomly choose between rock,paper,scissors*/
function computerRandomChoice () {
    return choice[Math.floor(Math.random()*choice.length)];
}

/*ask player input of rock,paper,scissors by addEventListener*/
const choiceButtons = document.querySelectorAll('.rps-container button');    
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click',clicked)
});

function clicked() {
    const choiceClass = this.classList
    switch (choiceClass.value) {
        case "rock":
            input = "rock";
            game();
        break;
        case "paper":
            input = "paper";
            game();
        break;
        case "scissors":
            input = "scissors";  
            game(); 
        break;
    }
    
}
        
/*compare result of player and computer then display the result*/
function playRound (a,b) {
    let roundResult = ""
    switch (a){
        case "rock" : 
            if (b === "rock"){roundResult = "draw"}
            else if (b === "paper"){roundResult = "lose"}
            else if (b === "scissors"){roundResult = "win"};
            break;
        case "paper" :
            if (b === "rock"){roundResult = "win"}
            else if (b === "paper"){roundResult = "draw"}
            else if(b === "scissors"){roundResult = "lose"};
            break;
        case "scissors" :
            if (b === "rock"){roundResult = "lose"}
            else if (b === "paper"){roundResult = "win"}
            else if(b === "scissors"){roundResult = "draw"};
            break;
    }
    switch(roundResult){
        case "win" :
            playerScore +=1
            alert ("You win the round!");
            break;
        case "draw" :
            alert ("You draw the round!");
            break;
        case "lose" :
            computerScore +=1
            alert ("You lose the round!");
            break;
    } 
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function game(){
    if(playerScore < 3 ||computerScore < 3){
        let computerSelection = computerRandomChoice ();
        let playerSelection = input;
        playRound (playerSelection,computerSelection);
    }
    if(playerScore >= 3 ||computerScore >= 3){
        if(playerScore >= 3){
            alert ("You win the game")
        }
        if(computerScore >= 3){
            alert ("You lose the game")
        }
    }
}

/*button to reset the game*/
const resetButton = document.querySelector('.reset-container button');
resetButton.addEventListener('click',() =>{
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore; //reset score display
    computerScoreDisplay.textContent = computerScore; //reset score display
});


