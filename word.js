var Letter = require("./letter.js");

function Word(answer) {
    this.objArray = [];

    for (var i = 0; i < answer.length; i++) {
        var letter= new letter(answer[i]);
        this.objArray.push(letter);
    }

    this.log = function() {
        answerLog = "";
        for (var i = 0; i < this.objArray.length; i++) {
            answer += this.objArray[i] + " ";    
        }
        console.log(answerLog + "\n============================\n");
    };

    this.userGuess = function(input) {
        for (var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
        }
    };
}

module.exports = Word;
