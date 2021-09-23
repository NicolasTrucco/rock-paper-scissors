
const rps = ['rock','paper','scissors'];

function computerPlay(){
        return rps[Math.floor(Math.random() * rps.length)];
}
let playerScore = 0;
let computerScore = 0;



function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = prompt('Insert your play').toLowerCase(); // Sirve para que el input sea case insensitive
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'Its a rock tie!';
    } else if ( (playerSelection === 'rock' && computerSelection === 'paper')) {
        computerScore += 1;
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'You lose! Paper beats Rock!'
    } else if ( (playerSelection === 'rock' && computerSelection === 'scissors')) {
        playerScore += 1;
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'You win! Rock beats Scissors!'
    }else if ( (playerSelection === 'paper' && computerSelection === 'paper')) {
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'Its a paper tie!'
    }else if ( (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore += 1;
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'You win! Paper beats Rock!'
    }else if ( (playerSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore += 1;
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'You lose! Scissors beats Paper!'
    }else if ( (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore += 1;
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'You win! Scissors beats Paper!'
    }else if ( (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'Its a scissors tie!'
    }else if ( (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore += 1;
        console.log('you choosed:',playerSelection);
        console.log('computer choosed:',computerSelection);
        return 'You lose! Rock beats Scissors!'
    }
}

function game(){
    let i = 0;
    while (i<5){
        console.log(playRound());
        console.log('your score:',playerScore);
        console.log('computer score:',computerScore);
        i++;
    }
}    
game();

console.log('your final score:',playerScore);
console.log('computer final score:',computerScore);
    
if (playerScore > computerScore) {
    console.log('Player wins!')
} else if (playerScore === computerScore) {
    console.log('Its a tie!')
} else {
    console.log('Computer wins!')
}