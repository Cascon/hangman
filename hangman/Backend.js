
	/*
	Hangman
	Goals to finish project
	Draw the fucking hangman man
	Restart button after failing or completing DONE
	victory and defeat sounds DONE
  more words DONE

	add ons (project is finished before this stuff is added)
	word picking function with categories
  remaining guess counter
  score system

	multiplayer mode?
	*/


//sounds
let keyboardPressSound; //makes the click sound
let shiaSuprise;
let victorySound;
let victorySoundAlt1;
let victorySoundAlt2;
let restartSound1;
let restartSound2;

//images
let spritesheet;
let spritedata;

function preload() {
  soundFormats('mp3', 'ogg');

  keyboardPressSound = loadSound('assets/keyboardClick');
	keyboardPressSound.setVolume(0.2)

		shiaSuprise = loadSound('assets/shiaSuprise.ogg');
		shiaSuprise.setVolume(0.7	)
		victorySound = loadSound('assets/victory.ogg');
		victorySoundAlt1 = loadSound('assets/victoryAlt1.ogg');
		victorySoundAlt2 = loadSound('assets/victoryAlt2.ogg');

    restartSound1 = loadSound(`assets/restartSound1.ogg`);
    restartSound1.setVolume(1.0);
    restartSound2 = loadSound(`assets/restartSound2.ogg`);
    restartSound2.setVolume(1.0);

    spritedata = loadJSON('assets/Hangman.json');
    spritesheet = loadImage('assets/spritesheet.png');
}
let victorySoundPicker = pickRandom(3);

var canvasWidth = 1200
var canvasHeight = 500


//ideas in the future to add score on the screen on the right
var correctGuessCounter = 0;
var wrongGuessCounter = 0;


 var wrongGuessLocation = 50; //the location the wrong letter guesses go
 var wrongGuessLocation2 = 50; //the location the wrong letter guesses go for the second line
 let gameOver = false; //makes a variable to check if the game is over
 let gameWin = false; //makes a variable to check if the game was won
 let publicAlphabetButton;


  const alphabetArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
	let dictionary = [ //the array in which we store our words
	{word: "Banana"},
	{word: "Orange"},
	{word: "Apple"},
	{word: "Red"},
  {word:"Time"},
  {word:"Year"},
  {word:"People"},
  {word:"Woman"},
  {word:"Family"},
  {word:"Student"},
  {word:"Company"},
  {word:"System"},
  {word:"Program"},
  {word:"Work"},
  {word:"Home"},
  {word:"Water"},
  {word:"Goverment"},
  {word:"Area"},
  {word:"Buisness"},
  {word:"Idea"},
  {word:"Friend"},
  {word:"Power"},
  {word:"Game"},
  {word:"Month"},
  {word:"Money"},
  {word:"Service"},
  {word:"Member"},
  {word:"Community"},
  {word:"President"},
  {word:"Kid"},
  {word:"Parent"},
  {word:"Person"},
  {word:"Art"},
  {word:"War"},
  {word:"History"},
  {word:"Information"},
  {word:"Body"},
  {word:"Party"},
  {word:"Result"},
  {word:"Research"},
  {word:"Education"},
  {word:"Reason"}
];
	let holder = []; //an array where we store thecorrectly guessed letters

		var wrongGuess = 0; //remembers the amount of incorrect guesses the user has made
		var loseNumber = 10; //the amount of guesses for the user to lose

	function pickRandom(argument) { //the function used to pick randomly from the word dictionary
  if (typeof argument === 'number') {
    return Math.floor(Math.random() * Math.floor(argument)) + 1;
  }
   if (Array.isArray(argument)) {
    return argument[Math.floor(Math.random() * argument.length)];
  }
	}
	let answer = pickRandom(dictionary).word; //the command to choose a word (will be updated with more features)
	let Answer = answer.toLowerCase(); //makes sure the Answer is the same case as the letter;
	let Length = answer.length; //lets us call for the answer length easily especially when telling the user the word



	function Alphabet(letter, x, y){  //the way the user will interact with the game
		let Letter = letter.toLowerCase(); //makes sure the Letter is the same case as the Answer;

		//makes and styles the button
		let alphabet = document.createElement("button");
		alphabet.textContent = letter;
		alphabet.setAttribute("class", "Alphabet");
		alphabet.style.left = x;
		alphabet.style.top = y;


		alphabet.addEventListener('click', () =>{

              //adds a click to the button
			if(gameWin || gameOver) { // checks if the game has ended, if it has disable the click button and add a replay button
				PublicResetButton.disabled = false;
        PublicResetButton.style.visibility = "visible";
          publicAlphabetButton = alphabet;
				//replay button implement
			} else {

 let easterEgg = pickRandom(100);
 if(easterEgg === pickRandom(100)){
	 shiaSuprise.play();
 } else {
			keyboardPressSound.play(); //plays a sound
}
		alphabet.style.backgroundColor = "#808080"; //greys the button
//wrong guess statement
		if(!Answer.includes(Letter)) {
			wrongGuess++; //increases wrongGuess counter
			wrongGuessLocation = wrongGuessLocation + 50; //changes the location the wrong letter will be displayed at
			console.log("Strike " + wrongGuess) //informs the guess was wrong
			if(wrongGuessLocation < 50*14){ //checks to see if a new line is needed, makes one if it is
					drawLetter(letter, lineLocation + wrongGuessLocation, 60,'36px arial','red')
			} else{ //draws the letter
				wrongGuessLocation2 = wrongGuessLocation2 +50;
				drawLetter(letter, lineLocation + wrongGuessLocation2, 100,'36px arial','red')
			}
//game over statement
			if(wrongGuess === loseNumber || wrongGuess > loseNumber) {
				gameOver = true;
				shiaSuprise.play();
        PublicResetButton.disabled = false;
        PublicResetButton.style.visibility = "visible";
				console.log("You Lost!, The word was " + answer);
			drawLetter("Game Over! The word was " + answer, 10, 150, '48px Comic Sans MS', 'Black');

			}
		}
//checks the word for the letter guessed
			for(var i=0; i < Length; i++){
				let X = 60
				if (Answer[i] == Letter) {
					X = (X*i+1)+15;
					drawLetter(Letter.toUpperCase(), X, 60,'48px arial','black');
					holder.push(i+1) //pushes the letter to a holder so we can enact a victory statement

				}
			}

if(holder.length === Length){ //gamewin statement
  PublicResetButton.disabled = false;
  PublicResetButton.style.visibility = "visible";	if(victorySoundPicker === 1){victorySound.play()}
	if(victorySoundPicker === 2){victorySoundAlt1.play()}
	if(victorySoundPicker === 3){victorySoundAlt2.play()}
	gameWin = true;
	console.log("Congratulations! You guessed the word!");
  drawLetter("Congratulations! You guessed the word", 10, 150,'48px Comic Sans MS','Green');
}
            publicAlphabetButton = alphabet;
		alphabet.disabled = true; //disables the button after we clicked it

}	})

	document.body.appendChild(alphabet); //adds the button to the screen
	}

//legacy code that will get updated with drawLetter

drawLetter("I am thinking of a " + Length + " letter word", 0, 300, `36px Comic Sans MS`, `Black`)


//potential legacy code, clears the screen. (might be needed for a reset button)
function clearCanvas(x,y,width,height) {
	var canvas = document.getElementById('canvas');
	if(canvas.getContext) {
		var context = canvas.getContext('2d');
		context.clearRect(x,y,width,height)
	}
}

 function drawLetter(Letter, X, Y, font, color){ //draws the letter
	 var canvas = document.getElementById('canvas');
 	if (canvas.getContext) {
 	 var context = canvas.getContext('2d');


 	context.font = font;
	context.fillStyle = color;
	 context.fillText(Letter, X, Y);
 }
 }


	function drawLine(X){ //draws the line
	var canvas = document.getElementById('canvas');
	if (canvas.getContext) {
	 var context = canvas.getContext('2d');
	context.beginPath();
	context.lineWidth = "6";
	context.rect(X, 70, 50, 0)
	context.stroke();
	}
	}
	let lineLocation = 10;
	function lineDraw(){ //also draws the line but needs the first function to work
		var canvas = document.getElementById('canvas');
	 if (canvas.getContext) {
		 var context = canvas.getContext('2d');

	for(var i = 0; i < Length; i++){
	let LetterHolder = drawLine(lineLocation);
	lineLocation = lineLocation +60;
	}
	}
	}
  var PublicResetButton;

    function resetButton(){

      let ResetButton = document.createElement('button');
  		ResetButton.textContent = "Play Again?";
  		ResetButton.setAttribute("class", "resetButton");
  		ResetButton.style.left = 100;
  		ResetButton.style.top = 10;
        ResetButton.disabled = true;
        ResetButton.style.visibility = "hidden";
        PublicResetButton = ResetButton;


      ResetButton.addEventListener('click', () =>{

        ResetButton.disabled = true;
        ResetButton.style.visibility ="hidden";
        clearCanvas(0,0,canvasWidth,canvasHeight);

        restartSound1.play();
        drawLetter("SHUTTING DOWN...", 100, 100,'100px Courier New', `Black`)

        setTimeout(() => {
          restartSound2.play();
          clearCanvas(0,0,canvasWidth,canvasHeight);
          drawLetter("BOOTING UP...", 100, 100,'100px Courier New', `Black`)
        }, 3500)
        setTimeout(() => {

          clearCanvas(0,0,canvasWidth,canvasHeight);


        //reseting variables
        gameOver = false;
        gameWin = false;
        wrongGuess = 0;
        wrongGuessLocation = 50;
        wrongGuessLocation2 = 50;
        lineLocation = 10;
        answer = pickRandom(dictionary).word;
        Answer = answer.toLowerCase();
        Length = answer.length;

        holder = [];

        drawLetter("I am thinking of a " + Length + " letter word", 0, 300, `36px Comic Sans MS`, `Black`)
        victorySound.play();

        lineDraw();
/*
        publicAlphabetButton.style.backgroundColor = "White";
        publicAlphabetButton.disabled = false;
        */
        createButtons();
        PublicResetButton = ResetButton;
      }, 8000)
  })
      document.body.appendChild(ResetButton)
    }
    resetButton();
//makes the letter buttons (probably a better way to implement this)
	let change = 50;
	let changeY = 2;
	let baseX = 20;
	let baseY = 200;
  function createButtons() {
    let X = 0
    for(const element of alphabetArray){
      Alphabet(element, change*X + baseX + "px", baseY +"px");
      X++
    }
}
createButtons();
