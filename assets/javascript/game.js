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
		image: "fasttimes.jpg"
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
var chosenImage = "";
var lettersInChosenAns = [];
var numBlanks = 0;
var blanksForChosenAns = [];
var blanksWithRightLetters = [];
var wrongGuesses = [];
var lettersGuessed = "";
var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;



function startGame () {

	// choose answer
	chosenAnswer = answerOptions[Math.floor(Math.random()*answerOptions.length)];



	lettersInChosenAns = chosenAnswer.split("");

	numBlanks = chosenAnswer.length;


	guessesLeft = 12;
	wrongGuesses = [];
	blanksForChosenAns = [];


	// make chosen word into blanks
	for (var i = 0; i < numBlanks; i++) {
			if (lettersInChosenAns[i] === " ") {
				blanksForChosenAns.push("&#x2000;");
				lettersInChosenAns[i] = "&#x2000;";
			} else {
				blanksForChosenAns.push("_");
			}
	}


	// change html
	document.getElementById("winalert").style.display="none";  
	document.getElementById("lossalert").style.display="none"; 

	document.getElementById("leftbox").innerHTML = "<img id='leftboxImg' width='100%' src='assets/images/question.gif'>";
	document.getElementById("answerDisplay").innerHTML = blanksForChosenAns.join(" ");
	document.getElementById("numberGuessLeft").innerHTML = guessesLeft;
	document.getElementById("numberWins").innerHTML = winCount;
	document.getElementById("numberLost").innerHTML = lossCount;
	document.getElementById("lettersClicked").innerHTML = "";


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
			console.log("correct letter found");
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


}



function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guess Left" + guessesLeft);

	document.getElementById("numberGuessLeft").innerHTML = guessesLeft;
	document.getElementById("answerDisplay").innerHTML = blanksForChosenAns.join(" ");


	console.log(lettersInChosenAns.toString());
	console.log(blanksForChosenAns.toString());


	for (var i = 0; i < answerData.length; i++) {
		if (answerData[i].movie === chosenAnswer){
			chosenImage = answerData[i].image;
		}
	}


		console.log(chosenImage);

		if (blanksForChosenAns.toString() == lettersInChosenAns.toString()) {
			winCount++;
			
			document.getElementById("numberWins").innerHTML = winCount;

			document.getElementById("leftbox").innerHTML = "<img width='100%' src='assets/images/"+ chosenImage + "'/>";

			document.getElementById("winalert").style.display="block";  

			document.getElementById("startGameButton").innerHTML = "Play Again";

			$(document).on('keyup', function (e) {
			    if (e.keyCode == 13) {
			        startGame();
			    }
			});

		}
		else if (guessesLeft == 0) {
			lossCount++;

			document.getElementById("lossalert").style.display="block";

			document.getElementById("leftbox").innerHTML = "<img width='100%' src='assets/images/"+ chosenImage + "'/>";
		
			document.getElementById("numberLost").innerHTML = lossCount;
		}
}





document.onkeyup =  function keyPress (argument) {
	lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(lettersGuessed);

	checkGuesses(lettersGuessed);
	
	console.log(blanksForChosenAns);
	console.log("wrongGuesses " + wrongGuesses);
	document.getElementById("lettersClicked").innerHTML = wrongGuesses.join(" ");
	roundComplete();
}

startGame();