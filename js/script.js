const choice = ["rock","paper","scissors"];

/*ask player input of rock,paper,scissors (case insensitive)*/
/*computer randomly choose between rock,paper,scissors*/
function computerRandomChoice () {
    return choice[Math.floor(Math.random()*choice.length)];
}
/*compare result of player and computer then display the result*/

/*play 5 round ,track result of each round and report the winner at the end*/
console.log (computerRandomChoice ());