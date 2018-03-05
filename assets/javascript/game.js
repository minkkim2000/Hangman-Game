// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.

var movieList = [
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


var choice = Math.floor(Math.random()*movieTitle.length);
var answer = movieTitle[choice]; //the chosen answer from array
var answerLength = answer.length;
var lettersInAnswer = answer.split("");
var answerDisplay = [];

console.log(answer);

console.log(lettersInAnswer);

// IF there is a " " in the answer, 
var splitAnswer1 = answer.split(" ", (answerLength+1));

console.log(splitAnswer1);
for (var i = 0; i < splitAnswer1.length; i++) {
	answerDisplay.push("_");

	if (splitAnswer1[i] = " ") {
		var 
	}
}

document.getElementById("currentWord").innerHTML = 








var lettersGuessed = [];
var answerDisplay = [];

var wins = 0;
var losses = 0;
var guessLeft = 15;
var lettersGuessed = [];







function startGame(){
	wins = 0;
	losses = 0;
	guessLeft = 15;
	lettersGuessed = [];
	answerDisplay = [];


}

function checkGuess(){






if (guessLeft = 0) {
    answerDisplay.push(answer);
}


}