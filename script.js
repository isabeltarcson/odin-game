let pscore = 0;
let cscore = 0;
const scores = [pscore, cscore];

const rbutton = document.getElementById("rock");
const pbutton = document.getElementById("paper");
const sbutton = document.getElementById("scissor");
const result = document.getElementById("result");

let playerScore = document.getElementById("pscore");
let puterScore = document.getElementById("cscore");

console.log(playerScore)


function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    const choices = [rock, paper, scissors];
    console.log(choices);
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    console.log(choices[x]);
    return(choices[x]);
};

function getInput () {
    return(input);
};
function playerSelection(input, computer) {
    let player = input.toLowerCase();
    let win;
    if (computer.includes("Rock") ) {
        if (player.includes("rock")) {
            win = undefined;
        }
        else if (player.includes("paper")) {
            win = true;
        }
        else if (player.includes("scissor")) {
            win = false;
        }
        else {
            console.log("Invalid")
        }
    }
    else if (computer.includes("Paper")) {
        if (player.includes("rock")) {
            win = false;
        }
        else if (player.includes("paper")) {
            win = undefined;
        }
        else if (player.includes("scissor")) {
            win = true;
        }
        else {
            console.log("Invalid")
        }
    }
    else {
        if (player.includes("rock")) {
            win = true;
        }
        else if (player.includes("paper")) {
            win = true;
        }
        else if (player.includes("scissor")) {
            win = undefined;
        }
        else {
            console.log("Invalid")
        }
    }
    return win;
};
function game(scores, button){
    console.log(button)
    let input = String(button);
    let computer = getComputerChoice();
    let win = playerSelection(input, computer);
    switch (win) {
        case undefined:
            break;
        case true:
            scores[0] += 1;
            break;
        case false:
            scores[1] += 1;
            break;
    };
    if (scores[0] == 5 || scores[1] == 5) winner(scores);
    return scores;
};

rbutton.onclick = function () {
    if (scores[0] == 5 || scores[1] == 5) {
        
    }
    else {
        rbutton.classList.add('clicked')
        let score = game(scores, rbutton.id);
        playerScore.textContent = scores[0];
        puterScore.textContent = scores[1];
        console.log(scores, score);
        window.setTimeout(() => {rbutton.classList.remove("clicked")}, "200")
    }

};
sbutton.onclick = function () {
    if (scores[0] == 5 || scores[1] == 5) {
        
    }
    else {
        sbutton.classList.add('clicked')
        let score = game(scores, sbutton.id);
        playerScore.textContent = scores[0];
        puterScore.textContent = scores[1];
        console.log(scores, score);
        window.setTimeout(() => {sbutton.classList.remove("clicked")}, "200")
    }

};
pbutton.onclick = function () {
    if (scores[0] == 5 || scores[1] == 5) {
       
    }
    else {
        pbutton.classList.add('clicked')
        let score = game(scores, pbutton.id);
        playerScore.textContent = scores[0];
        puterScore.textContent = scores[1];
        console.log(scores, score);
        window.setTimeout(() => {pbutton.classList.remove("clicked")}, "200")
    }

};

if (scores[0] == 5 || scores[1] == 5) winner(scores);

function winner(scores) {
    if (scores[0] > scores[1]) {
        result.textContent = "You win!";
    }
    else if (scores[0] < scores[1]) {
        result.textContent = "You lose :(";
    }
    else {
        result.textContent = "It's a tie!";
    }
    
};






