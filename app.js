const quick = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const btnReset = document.getElementsByClassName('btn__reset');


//Use to keep track of the number of guesses
const missed = 0;


const phrases = [
    'rn', 'ja', 'kn', 'ps','nn'
];


btnReset.addEventListener('submit', () => {
 btnReset.display = "hide"
});

