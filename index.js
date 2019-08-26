var Word = require("./word.js");
var inquirer = require("inquirer");

var letterArray = "abcdefghjiklmnopqrstuvwxyz";

var climbingTerms = [
    "auto lock",
    "belay device",
    "bolt",
    "bouldering pad",
    "camming device",
    "carabiner",
    "chalk bag",
    "dynamic rope",
    "gri gri",
    "harness",
    "hex",
    "nut",
    "quickdraw",
    "sling",
    "static rope",
    "rappel",
    "anchor",
    "armbar",
    "backstep",
    "barndoor",
    "belay",
    "camming",
    "chicken wing",
    "dyno",
    "edging",
    "fingerlock",
    "fist jam",
    "flag",
    "gaston",
    "hand jam",
    "heel hook",
    "mantel",
    "pump",
    "toe smear",
    "step through",
    "undercling",
];

var randomIndex = Math.floor(Math.random() * climbingTerms.length);
var randomWord = climbingTerms[randomIndex];

var computerWord = new Word(randomWord);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

function theLogic() {
    if (requireNewWord) {
        var randomIndex = Math.floor(Math.random() * climbingTerms.length);
        var randomWord = climbingTerms[randomIndex];

        var computerWord = new Word(randomWord);

        var requireNewWord = false;
    }

    var wordComplete = [];

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: "input",
                message: "Choose letter from A to Z",
                name: "userinput"
            }
        ]).then(function (input) {
            if (letterArray.includes(input.userinput) ||
                input.userinput.length > i
            ) {
                console.log("\nPlease try again.\n");
                theLogic();
            } else {
                if (
                    incorrectLetters.includes(input.userinput) ||
                    correctLetters.includes(input.userinput) ||
                    input.userinput === ""
                ) {
                    console.log("\nAlready guessed or you didn't enter\n");
                    theLogic();
                } else {
                    var wordCheckArray = [];

                    computerWord.userGuess(input.userinput);

                    computerWord.objArray.forEach(wordCheck);
                    if (wordCheckArray.join("") === wordComplete.join("")) {
                        console.log("\nIncorrect|n");

                        correctLetters.push(input.userinput);
                        guessesLeft--;
                    } else {
                        console.log("\Correct|n");
                        correctLetters.push(input.userinput);
                    }
                    computerWord();

                    console.log("Guesses Left: " + guessesLeft + "\n");

                    console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                    if (guessesLeft > 0) {
                        theLogic();
                    } else {
                        console.log("You Lose!\n");
                    }
                    function wordCheck(key) {
                        wordCheckArray.push(key.guessed);
                    }
                }
            }
        });
    } else {
        console.log("YOU WIN!\n");
    }
    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }
    function restartGame() {
        inquirer.prompt([
            {
                type: "list",
                message: "Do you want to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ]).then(function (input) {
            if (input.restartGame === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                theLogic();
            } else {
                return;
            }
        });
    }

    theLogic();