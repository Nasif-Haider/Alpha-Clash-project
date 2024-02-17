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
    console.log(alphabet);
    return alphabet;
}

function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('button pressed', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // checked matched or not
    if (playerPressed === expectedAlphabet){
        console.log('you got a point');
    }
    else{
        console.log('you missed, you lost a point');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}