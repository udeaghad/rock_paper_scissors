//getting random play bythe computer

function computerPlay(){
  function randomIndex(options){

    const randomPlay = Math.floor(Math.random()* options.length);

    const item = options[randomPlay];

    return item;

    

  }

 const gameOptions = ["ROCK", "SCISSORS", "PAPER"];

 const result = randomIndex(gameOptions);

 alert(result);

 return result;


}


// setting the conditions of the game


function playRound(playerSelection, computerSelection){

   if (computerSelection == "ROCK" && playerSelection == "PAPER"){
       alert("You win! Paper beats Rock");
   } else if (computerSelection === "ROCK" && playerSelection == "SCISSORS"){
       alert("You loose! Rock beats Scissors");
   } else if (computerSelection === "ROCK" && playerSelection == "ROCK"){
       alert("It\'s a draw! Try again");
   } else if (computerSelection === "PAPER" && playerSelection == "ROCK"){
       alert("You loose! Paper beats the Rock");
   } else if (computerSelection === "PAPER" && playerSelection =="SCISSORS"){
       alert("You win! Scissors beat the Paper");
   } else if (computerSelection ==="PAPER" && playerSelection == "PAPER"){
       alert("It\'s a draw! Try again");
   } else if (computerSelection === "SCISSORS" && playerSelection == "PAPER"){
       alert("You loose! Scissors beat Paper");
   } else if (computerSelection === "SCISSORS" && playerSelection == "ROCK"){
       alert("You win! Rock beats Scissors");
   } else if (computerSelection === "SCISSORS" && playerSelection == "SCISSORS"){
       alert("It\'s a draw! Try again");
       
   } else { alert("Error! Play Rock or Paper or Scissors")
   }

   
}


// comparing the player input and computer random result and giving a output

//function game(){

    
    
    for (let i=0; i<=5; i++){
        if (i==5){
            alert("Refresh the page to Play Again");
            break;
        } else {
  const playerSelection = prompt("make your choice:").toUpperCase();
  
  //const playerSelection = "Rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

        }

    }
    

    playRound(playerSelection, computerSelection) += [i];  
        
//}

//game();

