/* 
Make an array for the secret word "beach"x
Make an array for the secret word blanksx
show the user the secret word blanksx
Ask user for a guessx
Make a function that takes in one letter (the guess) and does the follwoing:x
    -check if letter in in secret wordx
        -if yes, change blank to letterx
        -if no, say nox
    - check if secret word blanks matches secret word
         -if yes, say great job
*/

var secretWord = ["b", "e", "a", "c", "h"];
var secretWordBlanks = ["_ ", "_ ", "_ ", "_ ", "_ "];

console.log("Hello user. Guess my word");

function guessWord(){
    console.log(secretWordBlanks);
    var guess = prompt("Enter a guess. > ");
    checkLetters(guess);
}

function checkLetters(guess){
    var found = false;
    for(var i = 0; i < secretWord.length; i++){
        if (guess == secretWord[i]){
            secretWordBlanks[i] = guess;
            found = true;
        }
    }
    if (found){
        console.log("Good job! Your guess was in there!");
    } else{
        console.log("That letter is not in the word.");
    }
    checkWord();
}

function checkWord(){
    for(var i = 0; i < secretWord.length; i++){
        if (secretWord[i] !== secretWordBlanks[i]){
            guessWord();
        }
    }
    
    console.log("Great job! You guessed the word!" + " " + secretWord);

}

guessWord();

