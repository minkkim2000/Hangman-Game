// P S E U D O - C O D E
// ========================
// * var array of alphabet letters
// * var array of possible answers to be randomly chosen from
// 	* at start of game, random word from this array is chosen as target word
// * var targetWord = ();
// * var targetWordHidden = [];
// * var answerUnderscore of same number of "_"
// * var winCount number of wincounts
// * var guessesLeft of guesses left --guessLeft
// * var wrongGuessArray of letters guessed wrong
// * var guessKey = the key user pressed

// * At the START of the game,
// 	*Reset mode: 
// 		* random word is chosen from array of possible answers and pushed into targetWord variable value
// 		* same number of "_" is pushed into targetWordHidden array
// 		* win count = 0
// 		* Guesses Left = 12
// 		* #answerDisplay = ;
//		* #leftbox = empty div

// * When User Clicks a letter button:
// 		* Check Answer function:
// 			* check if the letter clicked === any letters in the targetWord
// 			* for (var i = 0; i < targetWord.length; i++) {
// 				if letterClicked === targetWord[i] {
// 					answerUnderscore[i] = guessKey
// 				} else {
// 					guessesLeft--;
// 					push <#lettersClicked> letterClicked </#lettersClicked> 
// 				}
// 			}

// * If (for (var i = 0; i < answerUnderscore.length; i++) {
// 	(answerUnderscore[i] !== "_")}) { winpoints();};


// function winpoints(){
// 	win++;
// }

// * If Guesses Left === 0 {
// 		stop game();
// 		display answer in #Answer Display
//		display answer image in #leftbox <img src = "..//images/" + targetWord + ".jpg">
// 	}

// ==========================================
// F O R - R E A L S - C O D E 
// ==========================================
//GLOBAL VARIABLES
var answerOptions = ["american beauty", "pulp fiction", "lucky number slevin", "american psycho", "kill bill", "inception", "pineapple express", "dark knight", ] 
* var targetWord = ();
* var targetWordHidden = [];
* var answerUnderscore of same number of "_"
* var winCount number of wincounts
* var guessesLeft of guesses left --guessLeft
* var wrongGuessArray of letters guessed wrong
* var guessKey = the key user pressed

