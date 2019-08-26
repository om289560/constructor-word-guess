var letter = require("./letter.js");

function Word(answer) {
    this.objArray = [];

    for (var i = 0; i < answer.length; i++) {
        var letter= new letter(answer[i]);
        this.objArray.push(letter);
    }

    this.
}
