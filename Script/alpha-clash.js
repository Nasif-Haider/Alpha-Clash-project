// function play (){
//     // hide the home screen 
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
    
// }

function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const value = parseInt(elementTextValue);
    return value;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementByTextId(elementId, value){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getRandomAlphabet(){
    // Get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    // Get a random number index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    return alphabet;
}

function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('button pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // checked matched or not
    if (playerPressed === expectedAlphabet){
        // For updating score: 1. Get the current score
        const currentScore = getTextElementValueById('current-score');
        //2. Increase the score by 1
        const newScore = currentScore + 1;
        //3. show the update score
        setTextElementValueById('current-score', newScore);

        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed, you lost a point');
        // Get the current life value
        const currentLife = getTextElementValueById('current-life');
        // Reduce the life count 
        const newLife = currentLife - 1;
        // Display the update life count
        setTextElementValueById('current-life',newLife);

        if (newLife === 0){
            gameOver();
        }
    }
}
// Capture keyboard key press 
document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function continueGame(){
    // 1. Generate a random alphabet
    const alphabet = getRandomAlphabet();

    // 2. Display the random alphabet to the screen 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // 3. set background color
    setBackgroundColor(alphabet);
}


function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // For play again reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    // update Total score: 1. get the final score
    const totalScore = getTextElementValueById('current-score');
    setTextElementValueById('total-score', totalScore);
 
    // clear the last selected alphabet color
    const currentAlphabet = getElementByTextId('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColor(currentAlphabet);
}