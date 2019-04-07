//var randomNumber = num;
var numberOptions = ["blueCrystal", "greenCrystal", "purpleCrystal", "redCrystal"];
//userInput = [];
var wins = 0;
var losses = 0;
var score = 0;
var gameInProgress = false;

function startGame(){
    var gameInProgress = true;
    resetGameBoard();
    renderRandomNumber();
    updateRandomNumber();
    renderCrystal();
    //userInput=[];
    wins = 0;
    losses = 0;
    score = 0;
}
// function playGame(){
//     renderScore();
// }

// // Each time when the game starts, the game will change the values of each crystal.

// function resetGame(){
//     updateMessage("");
//     updateRandomNumber(num);


//     //HOW DO YOU KNOW WHAT TO PUT IN HERE?

// You will be given a random number at the start of the game.
function renderRandomNumber() {
    var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
    console.log(randomNumber);
}
//console.log(Math.floor(Math.random() * (121 - 19)) + 19);

// There are four crystals below, each with its own unique random number between 
//1-12 (hidden). By clicking on a crystal, you will see the crystal's value and 
//add a specific amount of points to your total score.
//.attr("dataCrystalValue") allows us to grab value out of the atttibute.

function renderCrystal() {
    for (var i = 0; i < numberOptions.length; i++);
    var randomCrystalValue = Math.floor(Math.random() * (13 - 1)) + 1;
    var crystal = $("<div>");
    // var crystal = $("<img>");
    crystal.attr({
        "class": "crystal",
        "data-crystalValue": randomCrystalValue
    });
    cystal.attr("dataCrystalValue", numberOptions[i]);
    $(".crystals").append(crystal);
}
//click event applies to every single crystal on page. 

//since attributes on HTML elements are strings, convert to integer before adding to score.

$(".crystal").on("click", function(){
    console.log($(this));

});
//     var crystalValue = ($(this).attr("dataCrystalValue"));
//     crystalValue = parseInt(crystalValue);
//     renderScore();
// });
// // You win the game by matching your total score to random number. You lose the game if your total score
// // goes above the random number.
// // The value of each crystal is hidden from you until you click on it.


// function renderScore (){
//     score = score + crystalValue;
//     if (score === randomNumber) { 
//         winner();         
//     } else if (score > randomNumber){
//         endGame();
//     } else {
//         playGame();
//     }

// function winner(){
//     gameinProgress: false;
//     wins++;
//     updateWins(wins);
//     updateMessage("You won!");
// } 
// function endGame(){
//     gameinProgress: false;
//     losses++;
//     updateLosses(losses);
//     updateMessage("You lost!");
// }
// function updateWins(num) {
//     $("#wins").html(num);
    
// }
// function updateLosses(num){
//     $("#losses").htmnl(num);
// }

// function updateMessage(msg){
//     $("#message").html(msg);
// }

// function updateRandomNumber(num){
//     $("#randomNumber").html(num)
// }

// crystal.attr("src", images/blueCrystal.png)
// crystal.attr("src", images/greenCrystal.png)
// crystal.attr("src", images/purpleCrystal.png)
// crystal.attr("src", images/redCrystal.png)
