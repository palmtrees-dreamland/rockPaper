
  //create random computer move
  //Math.random() brings a number between 0 to 1
  /*Three choices: rock, paper, scissors; allocation of random number chose by computer is:
  rock = 0 > 1 / 3;
  paper = 1 / 3 > 2 / 3;
  scissors = 2 / 3 > 1 */
  //allocation player's choice: rock or paper or scissors
  // two variables: playerSelection and computerSelection
  // game equals player's turn and computer's turn
  // create conditional for player's choice

  // Prompt user to enter a choice of the three available
  
  let playerSelection = prompt('Enter a choice between rock, paper or scissors','');
  
// Creating computer's random move

// function getComputerChoice () {

    const randomChoice = Math.random();
    let computerSelection = '';

    if (randomChoice >= 0 && randomChoice < 1 / 3) {
      computerSelection = 'rock'; /* change == operators for < and it works! random choice needs to be >= 0 and < 1/3, not equal to 1/3 */
    
    } else if (randomChoice >= 1 / 3 && randomChoice < 2 / 3) {
      computerSelection = 'paper';
    
    } else if (randomChoice >= 2 / 3 && randomChoice < 1) {
      computerSelection = 'scissors';
    }
  // }

  // generating game rounds

   // function playRound () { not sure why functions are not working so I will try with variables

    // let result = '';

    //   if (playerSelection === computerSelection) {
    //     result = "It's a tie!";

    //   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    //     result = 'I win! Tee hee!';

    //   }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    //     result = 'Yes! You win!';

    //   }

    //   alert(`You choose ${playerSelection} and I pick ${computerSelection}. ${result}`);
   // }

   //playRound ();

  //  for (i = 0; i <= 4; i++){
  //   let i = 
  //     playRound ();
  //  }

  // If player's choice is rock
   
  let result = ''; //keep result's data in a variable called result

  if (computerSelection === 'rock') {
    result = 'That is a tie!';

  } else if (computerSelection === 'paper') {
    result = 'I win! Tee hee!';

  } else if (computerSelection === 'scissors') {
    result = 'Yes! You win!';

  }

  alert(`You choose ${playerSelection} and I pick ${computerSelection}. ${result}`);

