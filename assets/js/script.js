//assign elemnts to vars
var time = document.querySelector("#time");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");
var startButton = document.querySelector("#startButton");
var word = document.querySelector("#wordGoesHere");
var userInput = document.querySelector("#userInput");
var incorrectGuesses = document.querySelector("#lettersGuessed");
var correctGuesses = document.querySelector("#correctLetters");

var main = document.querySelector("main");
var aside = document.querySelector("aside");

var correctLetterString = "";
var incorrectLetterString = "";

var countDown = 3;

var wordArray = ["house", "mouse", "horse", "force", "Porsch", "borscht"];

function wordGenerator(){
    i=  Math.floor(Math.random() * wordArray.length);
    return wordArray[i]
}

 var wordToGuess = wordGenerator();
 
 //start button & countdown timer
 startButton.addEventListener("click", function(){
     main.setAttribute("style", "display: flex");
     aside.setAttribute("style", "display: flex");
     var timeLeft = setInterval(function(){
         countDown--;
         time.textContent = countDown;
         if(countDown===0){
             clearInterval(timeLeft);
             time.textContent = "YOU LOST!";
            }
        },1000)
        wordGenerator();
        console.log(wordToGuess);
        // word.textContent = wordToGuess;
        for(i=0; i<wordToGuess.length; i++){
            word.innerHTML += "_ ";  
        }
       
});

function keyMatcher(event){
    var letterMatch = event.key;
    console.log(letterMatch);
    // var wordExplode = wordToGuess.split("");
    

    //when a letter is guessed right this happens
    for(i=0; i<wordToGuess.length; i++){
        if(letterMatch === wordToGuess.charAt(i)){
            var matchedLetter = wordToGuess.charAt(i);
            correctGuesses.textContent += matchedLetter; 
            console.log(matchedLetter);
            // word[i] = matchedLetter;
            
            
        } else {
            // wordToGuess.replace(wordToGuess.charAt(i), "_ ");
        }
    };

console.log(word);
console.log(typeof(word.innerHTML));

    if(letterMatch !== wordToGuess.charAt(i)) {
        incorrectGuesses.textContent += letterMatch;
        console.log(wordToGuess.charAt(i));
    };
    //i need to 1 take apart wordToMatch to compare letterMatch to each of those and 3 if they match print them somewhere
}
document.addEventListener("keydown", keyMatcher)

//DONE

//need to make start button
//start button starts timer and prompts 1st word
//need array of words to guess
//need for loop or RNG to iterate words
//event listener for keys
//match key value with wordToGuess

// TODO
//when letters are guessed correctly put them in the coralating spot in the underscore string
//bonus: create RNG that wont repeat


//WHEN wordToGuess is generated
//THEN it is split into individual charactors
// WHEN wordToGuess is spit 
//THEN each charactor is given a new span element with a numerical data- attribute (iterater)
//WHEN each charactor has its own span element
//THEN each span is hidden behind an _ 
//WHEN a matching key is struck the apropriate 