
let playerScore = 1;
let computerScore = 1;

const btn = document.querySelectorAll ('button');

btn.forEach((button) => {
   
 button.addEventListener('click', function playerSelect(){

    playerSelection = button.textContent;

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
 
     const para2 = document.querySelector ('.computerplay');

     para2.textContent = "The computer played " + result;
   
     return result;

 
    }

 
     const computerSelection = computerPlay() 


// setting the conditions of the game




      const pScore = document.querySelector ('.playerscore')
      const cScore = document.querySelector('.computerscore')

      const para1 = document.querySelector('.outcome');


  function playRound(playerSelection, computerSelection){

     if (computerSelection == "ROCK" && playerSelection == "PAPER"){
       para1.textContent = "You win! Paper beats Rock"; 
       pScore.textContent = "Your score is " + playerScore++;
     } else if (computerSelection === "ROCK" && playerSelection == "SCISSORS"){
       para1.textContent ="You loose! Rock beats Scissors";
       cScore.textContent = "Computer score is " + computerScore++;
     } else if (computerSelection === "ROCK" && playerSelection == "ROCK"){
       para1.textContent= "It\'s a draw! Try again"
     } else if (computerSelection === "PAPER" && playerSelection == "ROCK"){
       para1.textContent = "You loose! Paper beats the Rock";
       cScore.textContent = "Computer score is " + computerScore++;
     } else if (computerSelection === "PAPER" && playerSelection =="SCISSORS"){
       para1.textContent = "You win! Scissors beat the Paper";
       pScore.textContent = "Your score is " + playerScore++;
     } else if (computerSelection ==="PAPER" && playerSelection == "PAPER"){
       para1.textContent = "It\'s a draw! Try again";
     } else if (computerSelection === "SCISSORS" && playerSelection == "PAPER"){
       para1.textContent = "You loose! Scissors beat Paper";
       cScore.textContent = "Computer score is " + computerScore++;
     } else if (computerSelection === "SCISSORS" && playerSelection == "ROCK"){
       para1.textContent = "You win! Rock beats Scissors";
       pScore.textContent = "Your score is " + playerScore++;
     } else if (computerSelection === "SCISSORS" && playerSelection == "SCISSORS"){
       para1.textContent = "It\'s a draw! Try again";
       
   //} else { para1.textContent = "Error! Play Rock or Paper or Scissors";
    }

   
   const endGame = document.querySelector('.endgame');

   if (playerScore == 6){

    //endGame.textContent = 'Game End...You won the Game...Refresh page to play again';
     alert("Game End...You won the Game...Click Ok to play again")
    
     location.reload();

   } else if (computerScore == 6 ){
       //endGame.textContent ="Game End...You Lossed the Game...Refresh page to play again";
      alert("Game End...You Lossed the Game...Click Ok to play again")
      location.reload();
   }
  
   
 }; 


  //const playerSelection = prompt("make your choice:").toUpperCase();   
       
    playRound(playerSelection, computerSelection);
    
      
 })
})


  

