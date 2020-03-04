const game = ()=>{
    let pScore = 0;
    let cScore =0;

//start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn')
        })
    }
//play match
const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const comuterHand = document.querySelector('.computer-hand')

    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
        option.addEventListener("click", function () {
            //computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            //Here is where we call compare hands
        });
    });
};

const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector('.winner');
    //check for a tie
    if (playerChoice === computerChoice){
        winner.textContent = "It's a tie";
        return;
    }
    //check for rock
    if (playerChoice === 'rock'){
        if (computerChoice === 'scissors'){
            winner.textContent = 'Player wins'
        }else{
            winner.textContent = 'Computer wins';
        }
    }
}


    //call inner functions
    startGame();
    playMatch()
}

//start game function

game();

