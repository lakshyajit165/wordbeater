window.addEventListener('load',init);
//GLobals

//Levels
const levels = {
	easy: 5,
	medium: 3,
	hard: 2
}

//To change Level
const currentLevel = levels.easy;

 let time = currentLevel;
 let score = 0;
 let isPlaying;

 //DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Initialize Game
function init(){
	//Load word from array
	showWord(words);

	//Start matching on word input
	wordInput.addEventListener('input',startMatch);

	//Call countdown every second
	setInterval(countdown, 1000);

	//Check Game status
	setInterval(checkStatus,50);
}

//Start Match
function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time = currentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;
	}
	
	//If score is -1, display 0
	if(score === -1){
		scoreDisplay.innerHTML = 0;
	}else{
		scoreDisplay.innerHTML = score;
    }
}
	

//Match Current Word to the word input
function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = 'Correct!!';
		return true;
	}else{
		message.innerHTML = '';
		return false;
	}
}

	
// Pick & and show random word
function showWord(words){

	//Generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	//Output Random Word
	currentWord.innerHTML = words[randIndex];
}

//Countdown Timer
function countdown(){
	// make sure time is not run out
	if(time > 0){
		//Decrement
		time--;
	}else if(time === 0){
		//Game is Over
		isPlaying = false;
	}
	//Show time
	timeDisplay.innerHTML = time;
}

//Check Game Status
function checkStatus(){
	if(!isPlaying && time === 0){
		message.innerHTML = 'Game Over!!';
		score = -1;
	}
}
