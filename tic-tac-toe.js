// add square to divs to make game grid and add event listener to squares
window.onload = function() {
    var squares = document.getElementById("board").children;
    for (i = 0; i <= squares.length - 1; i++) {
        squares[i].classList.add("square"); // add class square
        squares[i].addEventListener("click", makeMove, false); // add click even listener
        squares[i].addEventListener("mouseover", squareHover, false);
        squares[i].addEventListener("mouseout", squareExit, false);  
        squares[i].setAttribute('id', i); // add index loop as id to squares
    }
    // click event for new game button
    document.querySelector("button").addEventListener("click", restartGame);
};
 var slots = [[0,1,2], [3,4,5], [6,7,8],
 [0,3,6], [1,4,7], [2,5,8],
 [0,4,8], [2,4,6]];

// When a square is clicked add X or O to it
var prevMove = null;
function  makeMove(e) {
    // Check if the square is empty to Disallow Cheating 
    if (e.target.innerHTML == "") {
        // first move of the game
        if (prevMove == null) {
            e.target.innerHTML = "X";
            e.target.classList.add("X");
            prevMove = 1;        
        }else{
            // alternate bettween 'X' and 'O'
            if (prevMove == 1) {
                e.target.innerHTML = "O";
                e.target.classList.add("O");
                prevMove = 0;
            }
            else if (prevMove == 0) {
                e.target.innerHTML = "X";
                e.target.classList.add("X");
                prevMove = 1;
            }
        }
    }
    // after each move check for a winner
    winner()
}


function squareHover(e) {
    e.target.classList.add("hover");
}
function squareExit(e) {
    e.target.classList.remove("hover");
}


function winner() {
    var squares = document.getElementById("board").children;
    for ( i=0; i<slots.length; i++ ) {

        if (squares[slots[i][0]].innerHTML != "" || squares[slots[i][1]].innerHTML != "" || squares[slots[i][2]].innerHTML != "" ) {
            if ( squares[slots[i][0]].innerHTML  == squares[slots[i][1]].innerHTML && squares[slots[i][1]].innerHTML == squares[slots[i][2]].innerHTML ) {
                whoWon(squares[slots[i][0]].innerHTML);
            }
        }
    }
}

function whoWon(player){
    var status = document.getElementById("status");
    if (player == "X") {
        status.innerHTML = "Congratulations! 'X' is the Winner!";
    }
    else if(player == "O"){
        status.innerHTML = "Congratulations! 'O' is the Winner!";
    }
}


function restartGame() {
    var status = document.getElementById("status");
    var squares = document.getElementById("board").children;
    for (i = 0; i <= squares.length - 1; i++) {
        squares[i].classList.remove("X"); 
        squares[i].classList.remove("O"); 
        squares[i].innerHTML = ""; 
    }
    status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    prevMove = null;
}
