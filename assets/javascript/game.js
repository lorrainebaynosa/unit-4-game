
var randomNumber = num;
var numberChoices = ["blueCrystal", "greenCrystal", "purpleCrystal", "redCrystal"];
var wins = 0;
var losses = 0;
var score = 0;
var gameInProgress = false;

// You will be given a random number at the start of the game.
function renderRandomNumber() {
    var randomNumber = Math.floor(Math.random() * (121 - 19)) + 19;
}
//console.log(Math.floor(Math.random() * (121 - 19)) + 19);

// There are four crystals below. By clicking on a crystal, you will add a specific amount of points to your
// total score.
//four crystals each with own unique random number between 1-12 (hidden)//  
//for loop to create numbers associated with crystals for everyNumberOption

var crystalImage = $("img>");

function renderCrystallNumber() {
    for (var i = 0; i < numberChoices.length; i++);
    var crystalNumber = Math.floor(Math.random() * (13 - 1)) + 1;
    crystal - image.attr("data-crystalValue", numberChoices[i]);
    $(".img").html($(this).attr("data-crystalValue"));
}
    $(".crystal-image").on("click", function () {

    
// You win the game by matching your total score to random number. You lose the game if your total score
// goes above the random number.
// The value of each crystal is hidden from you until you click on it.
// Each time when the game starts, the game will change the values of each crystal.


function startNewGame() {
    gameinProgress = true;
    renderRandomNumber();
    renderCrystalNumber();
    resetGameBoard();


    

    
        //         imageCrystal.attr("data-crystalValue", 
        //         var crystalValue = ($(this).attr("data-crystalValue"));
        //         crystalValue = parseInt(crystalValue);
        //         counter = counter + crystalValue;
        //         if (counter === TargetNumber) {
        //             alert("You win!");
        //             wins++;
        //             updateWins();
        //         }
        //         else if (counter >= TargetNumber){
        //             alert("You lose!");
        //             losses++;
        //             updateLosses();
        //         }


        // // function updateWins() {
        // //     $("#message").hmtl("You won!");
        // //     wins+++//
