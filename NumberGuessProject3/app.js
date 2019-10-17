

// Game Values

let min=1,
    max=10,
    winningNum=2,
    guessesLeft=3;


// UI Elements
const game=document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      message=document.querySelector('.message');


// Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;


// Listen for guess
guessBtn.addEventListener('click',function(){
  let guess=parseInt(guessInput.value);
  

// Validate
  if (isNaN(guess) || guess<min || guess>max){
    setMessage(`Please enter numbers between ${min} and ${max}`,'red');
  }

  // Check if won
if (guess===winningNum){
  // Game over - won
  gameOver(true,`${winningNum} is correct. You won.`)

  

}else{
  // Wrong number
  guessesLeft-=1;

  if (guessesLeft===0){
    // Game over - Lost
    gameOver(false,`The game is over.\nYou've lost.\nThe winning number was ${winningNum}`);
  

  }else{
    // Game continues - wrong answer

    // Change border color
  guessInput.style.borderColor='red';

  // Clear the guesses input
  guessInput.value='';

  setMessage(`${guess} is not correct. ${guessesLeft} guesses left `,'red');



  }

}
});

// Set message
function setMessage(msg,color){
  message.style.color=color;
  message.textContent=msg;

}

function gameOver(won,msg){
  let color;
  won===true?color='green':color='red';

  // Disable input
  guessInput.disabled=true;

  // Change border color
  guessInput.style.borderColor=color;

  // Change text color
  guessInput.style.Color=color;

  // Set message
  setMessage(msg);

}
