var userScore = document.getElementById("user-score").value;
var compScore = document.getElementById("comp-score").value;

function initialize() {
    document.getElementById("user-score").innerText = 0;
    document.getElementById("comp-score").innerText = 0;
    document.getElementById("result").innerText = "Target Score : 5";
}

var choices = ["Rock", "Paper", "Scissor"];

var u = null;
var c = null;

// [rock, paper, scissor]
// [0, 1, 2]

function rock() {
    u = 0;
    c = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    // Math.floor(Math.random()*(b-a+1)+a)
    // where a is lowest limit and b is highest limit
    // Both inclusive [a, b]
    document.getElementById("user-choice").innerText = choices[u];
    document.getElementById("comp-choice").innerText = choices[c];
    decision(u, c);
    result();
}

function paper() {
    u = 1;
    c = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    document.getElementById("user-choice").innerText = choices[u];
    document.getElementById("comp-choice").innerText = choices[c];
    decision(u, c);
    result();
}

function scissor() {
    u = 2;
    c = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    document.getElementById("user-choice").innerText = choices[u];
    document.getElementById("comp-choice").innerText = choices[c];
    decision(u, c);
    result();
}

function decision(u, c) {
    if(u == c) {
        return;
    }
    if (u == 0) {
        if (c == 1) document.getElementById("comp-score").innerText++;
        else if ((c = 2)) document.getElementById("user-score").innerText++;
    } else if (u == 1) {
        if (c == 0) document.getElementById("user-score").innerText++;
        else if ((c = 2)) document.getElementById("comp-score").innerText++;
    } else if (u == 2) {
        if (c == 0) document.getElementById("comp-score").innerText++;
        else if ((c = 2)) document.getElementById("user-score").innerText++;
    }
}

function result() {
    if (document.getElementById("user-score").innerText == 5) {
        alert("You win, Congrats...");
        document.getElementById("result").innerText = "You Won...!!";
        return;
    }
    if (document.getElementById("comp-score").innerText == 5) {
        alert("You lost, Better luck next time...")
        document.getElementById("result").innerText = "You Lost...!!";
        return;
    }
}