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
}

function getInput () {
    let input = prompt("Rock Paper Scissors!")
    return(input)
}
function playerSelection(input, computer) {
    let player = input.toLowerCase();
    let win;
    if (computer.includes("Rock") ) {
        if (player.includes("rock")) {
           
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
            
        }
        else {
            console.log("Invalid")
        }
    }
    switch (win) {
        case undefined:
            console.log("Oops! Try Again!");
            break;
        case true:
            console.log("You win! "+player+" beats "+computer);
            break;
        case false:
            console.log("You lose! "+computer+" beats "+player);
            break;
    }
    console.log(win);
    return win;
}
function game(){
    let input = getInput();
    let computer = getComputerChoice();
    let win = playerSelection(input, computer);
    console.log(win)
    return(win)
}
