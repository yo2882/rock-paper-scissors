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
const computerImgDisplay = document.querySelector('.computer-choice img')
function computerRandomChoice () {
    let choiceChosen = choice[Math.floor(Math.random()*choice.length)];
    switch (choiceChosen) {
        case "rock":
            computerImgDisplay.src = "img/rock.png"
            break;
        case "paper":
            computerImgDisplay.src = "img/paper.png"
            break;
        case "scissors":
            computerImgDisplay.src = "img/scissors.png"
            break;
    }
    return choiceChosen
}

/*ask player input of rock,paper,scissors by addEventListener*/
const choiceButtons = document.querySelectorAll('.rps-container button'); 
const playerImgDisplay = document.querySelector('.player-choice img')  
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click',clicked)
});

function clicked() {
    const choiceClass = this.classList
    switch (choiceClass.value) {
        case "rock":
            input = "rock";
            playerImgDisplay.src = "img/rock.png"
            game();
        break;
        case "paper":
            input = "paper";
            playerImgDisplay.src = "img/paper.png"
            game();
        break;
        case "scissors":
            input = "scissors";  
            playerImgDisplay.src = "img/scissors.png"
            game(); 
        break;
    }
    
}

const resultDisplay = document.querySelector('.result')

/*compare result of player and computer then display the result*/
function playRound (a,b) {
    let roundResult = ""
    switch (a){
        case "rock" : 
            if (b === "rock"){
                roundResult = "draw"
                resultDisplay.textContent = "The clash of rocks trembles the earth, neither emerges victorious"
            }
            else if (b === "paper"){
                roundResult = "lose"
                resultDisplay.textContent = "Despite your unwavering might, cunning paper swaddles your rock"
            }
            else if (b === "scissors"){
                roundResult = "win"
                resultDisplay.textContent = "Your mighty rock crushes through the feeble blades of the scissors"
            };
            break;
        case "paper" :
            if (b === "rock"){
                roundResult = "win"
                resultDisplay.textContent = "With a graceful sweep, your paper envelops the rock and prevail"
            }
            else if (b === "paper"){
                roundResult = "draw"
                resultDisplay.textContent = "Both paper interlock in a graceful dance, resulting in a draw"
            }
            else if(b === "scissors"){
                roundResult = "lose"
                resultDisplay.textContent = "Your valiant paper falls prey to the sharp blades of the scissors"
            };
            break;
        case "scissors" :
            if (b === "rock"){
                roundResult = "lose"
                resultDisplay.textContent = "The resolute strike of your scissors falters against the immovable force of the rock"
            }
            else if (b === "paper"){
                roundResult = "win"
                resultDisplay.textContent = "With a swift and precise motion, your trusty scissors slice through the feeble paper"
            }
            else if(b === "scissors"){
                roundResult = "draw"
                resultDisplay.textContent = "Both sets of scissors clash with a symphony of metallic echoes, the game ends in a draw"
            };
            break;
    }
    switch(roundResult){
        case "win" :
            playerScore +=1
            break;
        case "draw" :
            break;
        case "lose" :
            computerScore +=1
            break;
    } 
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function game(){
    if(playerScore < 3 && computerScore < 3){
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
    playerImgDisplay.src = "img/question-mark.png"
    computerImgDisplay.src = "img/question-mark.png"
    resultDisplay.textContent = "May the first to conquer three rounds emerge victorious"
});


