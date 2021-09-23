
const rps = ['rock','paper','scissors'];

function computerPlay(){
        return rps[Math.floor(Math.random() * rps.length)];
}

let currentScore = {
    computerScore: 0,
    playerScore: 0,
    playerSelection:0,
    computerSelection:0,
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return {
            computerScore: computerScore,
            playerScore: playerScore,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    } else if ( (playerSelection === 'rock' && computerSelection === 'paper')) {

        return {
            computerScore: computerScore + 1,
            playerScore: playerScore,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    } else if ( (playerSelection === 'rock' && computerSelection === 'scissors')) {
        return {
            computerScore: computerScore,
            playerScore: playerScore + 1,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    }else if ( (playerSelection === 'paper' && computerSelection === 'paper')) {

        return {
            computerScore: computerScore,
            playerScore: playerScore,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    }else if ( (playerSelection === 'paper' && computerSelection === 'rock')) {

        return {
            computerScore: computerScore,
            playerScore: playerScore + 1,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    }else if ( (playerSelection === 'paper' && computerSelection === 'scissors')) {

        return {
            computerScore: computerScore + 1,
            playerScore: playerScore,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    }else if ( (playerSelection === 'scissors' && computerSelection === 'paper')) {
 
        return {
            computerScore: computerScore,
            playerScore: playerScore +1,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    }else if ( (playerSelection === 'scissors' && computerSelection === 'scissors')) {
   
        return {
            computerScore: computerScore,
            playerScore: playerScore,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    }else if ( (playerSelection === 'scissors' && computerSelection === 'rock')) {
       
        return {
            computerScore: computerScore +1,
            playerScore: playerScore,
            playerSelection: playerSelection,
            computerSelection: computerSelection,
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id == 1) {
        currentScore = playRound('rock', computerPlay(), currentScore.playerScore, currentScore.computerScore);
    } else if (button.id == 2) {
        currentScore = playRound('paper', computerPlay(), currentScore.playerScore, currentScore.computerScore);
    } else if (button.id == 3) {
        currentScore = playRound('scissors', computerPlay(), currentScore.playerScore, currentScore.computerScore);
    } 

    if (currentScore.playerSelection === 'rock') {
        document.getElementById('container1').innerHTML = "<img src= \images/rock.png>";
    } else if (currentScore.playerSelection === 'paper') {
        document.getElementById('container1').innerHTML = "<img src= \images/paper.png>";
    } else if (currentScore.playerSelection === 'scissors') {
        document.getElementById('container1').innerHTML = "<img src= \images/scissors.png>";
    }

    if (currentScore.computerSelection === 'rock') {
        document.getElementById('container2').innerHTML = "<img src= \images/rock.png>";
    } else if (currentScore.computerSelection === 'paper') {
        document.getElementById('container2').innerHTML = "<img src= \images/paper.png>";
    } else if (currentScore.computerSelection === 'scissors') {
        document.getElementById('container2').innerHTML = "<img src= \images/scissors.png>";
    }


    document.getElementById('container3').innerHTML = currentScore.playerScore;
    document.getElementById('container3').classList.add("text");
    document.getElementById('container4').innerHTML = currentScore.computerScore;
    document.getElementById('container4').classList.add("text");

    if (currentScore.computerScore == 5 || currentScore.playerScore == 5) {
        document.getElementById("buttonsContainer").style.display = "none";
    
        let div = document.createElement("div");  
        if (currentScore.playerScore == 5) {
            var textnode = document.createTextNode("You Win!");
        } else {
            var textnode = document.createTextNode("Computer Wins!");
        }
        div.appendChild(textnode);                             
        document.getElementById("winnerContainer").appendChild(div);
        let btn = document.createElement("button"); 
        btn.innerHTML = "Play again!";
        btn.classList.add("button");

        btn.addEventListener("click", function (computerScore,playerScore) {
          currentScore.computerScore = 0;
          currentScore.playerScore= 0;
          currentScore.playerSelection= 0;
          currentScore.computerSelection= 0;

          document.getElementById('container3').innerHTML = currentScore.playerScore;
          document.getElementById('container3').classList.add("text");
          document.getElementById('container4').innerHTML = currentScore.computerScore;
          document.getElementById('container4').classList.add("text");

          btn.style.display = "none";

          document.getElementById("buttonsContainer").style.display = "block";

        })
        let $btnC = document.getElementById('buttonsContainer') ;
        document.getElementById("playAgain").appendChild(btn);      
    }

  });
});





