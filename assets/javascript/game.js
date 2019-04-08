var numberOptions = ["blueCrystal", "greenCrystal", "purpleCrystal", "redCrystal"];
var randomNumber = 0;
var wins = 0;
var losses = 0;
var score = 0;
var gameInProgress = true;

function generateRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

// //function generateRandomCrystalValue(from, to){
//     return Math.floor(Math.random() * (to - from + 1)) + from;
// }

function renderRandomNumber(num) {
    $("#randomNumber").text(num);
}

// function renderWins(num) {
//     $("#wins").text(num);
// }

// function renderLosses(num) {
//     $("#losses").text(num);
// }

function renderScore(num) {
    $("#score").text(num);
}
// function renderMessage(message) {
//     $("#message").text(message);
// }

function startNewGame(num) {
    randomNumber=num;
    renderRandomNumber(num); 
    score = 0;  
    renderScore(score);
    setCrystalValues();
}

function playGame(userInput){
    score = score + parseInt(userInput);
    if (score === randomNumber){
        wins();
    } else if (score > randomNumber){
        losses();
    } else {
        playGame();
    }
    }
    
// function wins(num){
//     gameInProgress = false;
//     wins++;
//     renderWins();
//     renderMessage("You won. Select a crystal to play again.");
// }
// function losses(num){
//     gameInProgress = false;
//     losses++;
//     renderLosses();
//     renderMessage("You lost. Select a crystal to play again.");

// When game loads, a random number is already generated.   
randomNumber = generateRandomNumber(19, 120);
startNewGame(randomNumber);

//Each of the four crystals will be assigned a random number between 1-12 (hidden). 
//By clicking on a crystal, you will see the crystal's value and 
//add a specific amount of points to your total score.
//jQuery set attirube syntax attr(name, value)


function setCrystalValues() {
    for (var i = 0; i < numberOptions.length; i++) {
        var randomCrystalValue = Math.floor(Math.random() * 12) + 1;
        //generateRandomCrystalValue(1, 12);
        var crystal = $("#" + numberOptions[i]);
        crystal.attr("data-crystalValue", randomCrystalValue);
    }
}  
var score = 0;

$(".crystals").on("click", function() {
    console.log("Crystal being clicked!");
    var crystalValue = $(this).attr("data-crystalValue");
    var score = crystalValue + score;
    console.log(score); 
    // if (gameInProgress) {
    //     var crystalValue = $(this).attr("data-crystalValue");
    //     playGame(crystalValue);
    // } else {
    //     randomNumber = generateRandomNumber(19, 120);
    //     randomCrystalValue = generateRandomCrystalValue(1, 12);
    //     startNewGame(randomNumber);
    // }
   
});