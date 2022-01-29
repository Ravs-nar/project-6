const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.querySelector('.btn__reset');
const phraselist = document.getElementById('phrase');


//Use to keep track of the number of guesses
let missed = 0;


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

console.log(addPhraseToDisplay(randomphrase));



 

function checkLetter(check) {
    const checkLetter = querySelectorAll('li');
    var match = null;

    for( let i = 0; i < check.length; i++){
    ///Loop through all of the li elements. Remember: arrays start with the index of 0.

          checkLetter = check[i];

          if (checkLetter[i] === "check"){
              var score = match + 1;
              checkLetter.classList.add("show");
          } else {
              checkLetter.classList.add("")
          }
    }
}
