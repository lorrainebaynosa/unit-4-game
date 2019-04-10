var numberOptions = ["blueCrystal", "greenCrystal", "purpleCrystal", "redCrystal"];
var randomNumber = 0;
var wins = 0;
var losses = 0;
var score = 0;
// var userInput = [];
var gameInProgress = true;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCrystalValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderRandomNumber(num) {
    $("#randomNumber").text("Random Number: " + num);
}

function renderWins(num) {
    $("#wins").text("Wins: " + num);
}

function renderLosses(num) {
    $("#losses").text("Losses: " + num);
}

function renderScore(num) {
    $("#score").text("Score:" + num);
}

function renderMessage(message) {
    $("#message").text("Message:" + message);
}

function startNewGame() {
    randomNumber = generateRandomNumber(19, 120);
    renderRandomNumber(randomNumber);
    gameInProgress = true;
    score = 0;
    renderScore(score);
    setCrystalValues();
}

function playGame(userInput) {
    renderMessage("Good luck!");
    if (score === randomNumber) {
        winner();
    } else if (score > randomNumber) {
        loser();
    }  
}

function winner(){
    gameInProgress = false;
    wins++;
    renderWins(wins);
    renderMessage("You won. Select a crystal to play again.");
    startNewGame();
}
function loser(){
    gameInProgress = false;
    losses++;
    renderLosses(losses);
    renderMessage("You lost. Select a crystal to play again.");
    startNewGame();
}
// When game loads, a random number is already generated.   
randomNumber = generateRandomNumber(19, 120);
startNewGame(randomNumber);

//Each of the four crystals will be assigned a random number between 1-12 (hidden). 
//By clicking on a crystal, you will see the crystal's value and 
//add a specific amount of points to your total score.
//jQuery set attribute syntax attr(name, value)


function setCrystalValues() {
    for (var i = 0; i < numberOptions.length; i++) {
        // var randomCrystalValue = Math.floor(Math.random() * 12) + 1;
        //return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        var randomCrystalValue = generateRandomCrystalValue(1, 12);
        var crystal = $("#" + numberOptions[i]);
        crystal.attr("data-crystalValue", randomCrystalValue);
    }
}

//Since attributes on HTML elements are strings, convert it to an integer before adding to the score.

$(".crystals").on("click", function () {
    console.log("Crystal being clicked!");
    var crystalValue = $(this).attr("data-crystalValue");
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
    score = score + crystalValue;
    console.log(score);
    if (gameInProgress = true) {
    playGame(score);
    renderScore(score);
    } else {
    startNewGame(randomNumber);
    }
});