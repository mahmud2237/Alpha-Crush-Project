// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     console.log(homeSection.classList.add('hidden'));
//     // show the playground
//     const playGroungSection = document.getElementById('play-ground');
//     // console.log(playGroungSection.classList);
//     // console.log(playGroungSection.classList.add('hidden'));
//     // if want to remove any class
//     console.log(playGroungSection.classList.remove('hidden'));
// }

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    //set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // Set background color
    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}