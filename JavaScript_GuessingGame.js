
class Game {
    answer = null;
    guess = null;
    player = null;
    score = 0;
    time = 0;
    timer= null;
    isPlaying = false;


start() {
    alert(
        "Welcome to the number guessing game! You'll be asked to guess a whole number between 1 & a 100"
    );
}

this.answer = this.generateNumber(1, 100);

this.isPlaying = true;

this.timer = setInterval(() => {
    console.log("timer", this.time);
    this.time++
}, 1000);

this.turns();
}

turns() {
    let userInput = prompt("Your guess:");
    if (userInput.toLowerCase() == "quit") {
        return this.end();
    }
this.guess = parseInt(userInput);

this.score++;

if (isNaN(this.guess)) {
    alert("You didn't give me a valid numer...");

} else {
    if (this.guess > this.answer){
        alert("Too high");
    }
} else if (this.guess < this.answer) {
    alert("Too low");
} else {
    alert('Correct!');

    this.end();
}
}

end() {
    alert(
        'You finished with a score of ${this.score} in ${this.time} seconds.'
    );

    clearInterval(this.timer);
    this.timer = null;
    this.score = 0;
    this.time = 0;
    this.isPlaying = false;
}

