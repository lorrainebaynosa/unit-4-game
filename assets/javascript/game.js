var randomNumber = "";
        var numberChoices = ["blueCrystal", "multiCrystal", "pinkCrystal", "purpleCrystal"];
        var imageCrystal = $("<img>");
        var counter = 0;
        var wins = 0;
        var losses = 0;
        var endGame = false;
        var startGame = true;
        var gameInProgress = false;


        function startNewGame() {
            gameinProgress = true;
            score = 0;
            wins = 0;
            losses = 0;
            renderTargetNumber();
            resetGameBoard();

            function renderTargetNumber() {
                var targetNumber = Math.floor(Math.random() * (121 - 19)) + 19;
            }
            console.log(Math.floor(Math.random() * (121 - 19)) + 19);

            //four crystals each with own unique random number between 1-12 (hidden)//  
            //for loop to create numbers associated with crystals for everyNumberOption

            $(".crystal-image").on("click", function () {


                function crystalNumberGenerator() {
                    for (var i = 0; i < numberChoices.length; i++);
                    var crystalNumber = Math.floor(Math.random() * (13 - 1)) + 1;
                    crystal - image.attr("data-crystalValue", numberChoices[i]);
                    $(".img").html($(this).attr("data-crystalValue"));
                }



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
                // //     wins+++;

            });

    </script>