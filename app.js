const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector('.btn__reset');
const phraselist = document.getElementById('phrase');
const scoreboard = document.getElementById("scoreboard");


//Use to keep track of the number of guesses
let missed = 0;

//Declare and initalize the phrases array storing at least five strings that contain only letters and spaces, no puncuation
const phrases = [
    "Demon Slayer",
    "Code Love",
    "Attack On", 
    "We Ride",
    "bing bong",
];

//Hide start button when the user clicks
btnReset.addEventListener('click', e => {
 document.getElementById('overlay').style.display = "none";
});



function getRandomPhraseAsArray(arr) {
// Gives a random phrase to be selected
    const random =  Math.floor(Math.random() * arr.length);
    const randomphrase = arr[random].toLowerCase();
    const spiltphrase = randomphrase.split('');

    return spiltphrase;
}


let randomphrase = getRandomPhraseAsArray(phrases);

///////////////////////////////////////////////////////////////////////////

function addPhraseToDisplay(arr) {
 for( let i = 0; i < arr.length; i ++) {

///Create an addPhraseToDisplay function that loops through an array of characters. 
////You will need to write it so that it can take an array of letters and create a li item.

   const li = document.createElement('li');

/////put the character inside the list item.

   li.textContent = arr[i];

   //Apend that list item to the #phrase ul in your HTML
    phraselist.appendChild(li);

////if the character in the array is a letter and not a space, the function should add the class "letter" to the li
////If not, add the ''space'' class.

    if (arr[i] === " "){
        li.classList.add("space");
    } else {
        li.classList.add("letter");
    }

///To use the function, you'll get the value returned by the
//getRandomPhraseAsArray, save it to a variable, and pass it to addPhraseToDisplay as an argument

 }
};

addPhraseToDisplay(randomphrase);


 

function checkLetter(check) {
    const checkLetter = querySelectorAll('li');
    var match = null;

    for( let i = 0; i < check.length; i++ ){
    ///Loop through all of the li elements. Remember: arrays start with the index of 0.

//Create a conditional that compares the text of the button parameter to the text
//of the li at the current index
          if (checkLetter[i] === check){
              checkLetter.classList.add("show");
              match = check.value;
          
          }
    }
    return match;
}

qwerty.addEventListener("click", (e) => {
let button = e.target;

//Use a conditional to filter out clicks that don't happen on the buttons or if the button already has the "chosen" class 
 if (button.tagName !== "BUTTON" || button.className ==="chosen") {
     return;
 }

 //Add the "chosen" class to the button that was pressed.
  button.classList.add("chosen");

  //Call the checkletter function and store the results in the variable.
  let result = checkLetter(e.target);

  //If the checkLetter function does not find a letter, remove one of the heart images and increment the missed counter
 if(result === 'checkletter' & scoreboard.length > 0 ) {
     ol.appendChild(li);
     lostHeart.removeChild(lostHeart[0]);
     missed++
 }


})

// check if the user has won
function CheckWin() {
const letter = document.getElementsByClassName("letter");
const show = document.getElementsByClassName("show");

document.getElementById("overlay").classList.add("win");
document.getElementsByClassName("title").innerHTML= "WInner";
document.getElementById("overlay").style.display = "flex";
if(missed <= 4 ) {
    document.getElementById("overlay").classList.add('lose');
    document.getElementsByClassName("title").innerHTML = "Loser";
    document.getElementById("overlay").style.display = "flex";
}

}
