//getting random play bythe computer

function computerPlay(){
  function randomIndex(options){

    const randomPlay = Math.floor(Math.random()* options.length);

    const item = options[randomPlay];

    return item;

    

  }

 const gameOptions = ["ROCK", "SCISSORS", "PAPER"];

 const result = randomIndex(gameOptions);

 console.log(result);

 return result;


}


// setting the conditions of the game

function playRound(playerSelection, computerSelection){

   if (computerSelection == "ROCK" && playerSelection == "PAPER"){
       console.log("You win! Paper beats Rock");
   } else if (computerSelection === "ROCK" && playerSelection == "SCISSORS"){
       console.log("You loose! Rock beats Scissors");
   } else if (computerSelection === "ROCK" && playerSelection == "ROCK"){
       console.log("It\'s a draw! Try again");
   } else if (computerSelection === "PAPER" && playerSelection == "ROCK"){
       console.log("You loose! Paper beats the Rock");
   } else if (computerSelection === "PAPER" && playerSelection =="SCISSORS"){
       console.log("You win! Scissors beat the Paper");
   } else if (computerSelection ==="PAPER" && playerSelection == "PAPER"){
       console.log("It\'s a draw! Try again");
   } else if (computerSelection === "SCISSORS" && playerSelection == "PAPER"){
       console.log("You loose! Scissors beat Paper");
   } else if (computerSelection === "SCISSORS" && playerSelection == "ROCK"){
       console.log("You win! Rock beats Scissors");
   } else if (computerSelection === "SCISSORS" && playerSelection == "SCISSORS"){
       console.log("It\'s a draw! Try again");
   } else { console.log("error! Play either Rock or Paper or Scissors")
   }
}

// comparing the player input and computer random result and giving a output

  const playerSelection = prompt("make your choice:").toUpperCase();
  //const playerSelection = "Rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  
