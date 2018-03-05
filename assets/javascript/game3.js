// GLOBAL VARIABLES

var answerData = [
	{
		movie: "kill bill",
		image: "killbill.jpg"
	}, {
		movie: "rocky",
		image: "rocky.jpg"
	}, {
		movie: "pulp fiction",
		image: "pulpfiction.jpg"
	}, {
		movie: "reservoir dogs",
		image: "reservoirdogs.jpg"
	}, {
		movie: "star wars",
		image: "starwars.jpg"
	}, {
		movie: "pretty in pink",
		image: "prettyinpink.jpg"
	}, {
		movie: "fast times in ridgemont high",
		image: "fast times.jpg"
	}, {
		movie: "how high",
		image: "howhigh.jpg"
	}, {
		movie: "mean girls",
		image: "meangirls.jpg"
	}, {
		movie: "girl with the pearl earring",
		image: "girlpearl.jpg"
	}, {
		movie: "the jungle book",
		image: "junglebook.jpg"
	}, {
		movie: "shall we dance",
		image: "shallwedance.jpg"
	}
	];

var answerOptions = answerData.map(a => a.movie);

var chosenAnswer = "";
var lettersInChosenAns = [];
var numBlanks = 0;
var blanksForChosenAns = [];
var blanksWithRightLetters = [];
var wrongGuesses = [];
var lettersGuessed = "";
var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;

// FUNCTIONS (Reusable blocks of code that )

function startGame () {

	// choose answer
	chosenAnswer = answerOptions[Math.floor(Math.random()*answerOptions
		.length)];

	lettersInChosenAns = chosenAnswer.split("");

	numBlanks = chosenAnswer.length;


	// Reset Game
	guessesLeft = 12;
	wrongGuesses = [];
	blanksForChosenAns = [];


	// make chosen word into blanks
	for (var i = 0; i < numBlanks; i++) {
			if (lettersInChosenAns[i] === " ") {
				blanksForChosenAns.push("&#x2000;");
			} else {
				blanksForChosenAns.push("_");
			}
	}


	// change html
	document.getElementById("answerDisplay").innerHTML = blanksForChosenAns.join(" ");
	document.getElementById("numberGuessLeft").innerHTML = guessesLeft;
	document.getElementById("numberWins").innerHTML = winCount;
	document.getElementById("numberLost").innerHTML = lossCount;
	document.getElementById("leftbox").innerHTML = "<img href= \"../images/question.gif\" alt=\"booooo\">";


	console.log(chosenAnswer);
	console.log(lettersInChosenAns);
	console.log(numBlanks);
	console.log(blanksForChosenAns);
}


function checkGuesses (letter) {
	var correctGuess = false;

	for (var i = 0; i < blanksForChosenAns.length; i++) {
		if (lettersInChosenAns[i] == letter) {
			correctGuess = true;
			console.log("letter found");
		}
	}

	if (correctGuess) {
		for (var i = 0; i < numBlanks; i++) {
			if(chosenAnswer[i] == letter){
				blanksForChosenAns[i] = letter;
			}
		}
	}

	else {
		wrongGuesses.push(letter);
		guessesLeft--;
	}

	// console.log(blanksWithRightLetters);

}



function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + "Guess Left" + guessesLeft);
}


startGame();


document.onkeyup =  function (argument) {
	lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(lettersGuessed);
	checkGuesses(lettersGuessed);
	console.log(blanksForChosenAns);
	roundComplete();
	// document.getElementById("lettersGuessed").innerHTML = wrongGuesses.join(" ");
}