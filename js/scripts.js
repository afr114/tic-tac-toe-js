var board = [];
var turn = 1;
var round = 1;
var player1 = new Player();
var player2 = new Player();
var playerTurn = player1;


function checkRow(element1, element2, element3) {
    if (isDefined(element1) && element1 === element2 && element2 === element3) {
      return true;
    } else {
      return false;
    }
}

function isDefined(element) {
  if (element != undefined){
    return true;
  } else {
    return false;
  }
}

function checkWin(board) {
    if (checkRow(board[2], board[4], board[6]) || checkRow(board[0], board[4], board[8])) {
      gameOver();
    }
    else if (checkRow(board[0], board[1], board[2]) || checkRow(board[3], board[4], board[5]) || checkRow(board[6], board[7], board[8])  ) {
      gameOver();
    }
    else if (checkRow(board[0], board[3], board[6]) || checkRow(board[1], board[4], board[7]) || checkRow(board[2], board[5], board[8])) {
      gameOver();
    }
  }

function gameOver() {
    player1.counter = [];
    player2.counter = [];
    console.log(playerTurn.playerName);
    for (var i = 0; i < 9; i++) {
      document.getElementById("space" + i).removeEventListener("click", listener);
    }
  }

function checkPlayerTurn() {
    if (turn % 2 === 0) {
    playerTurn = player2;
  } else {
    playerTurn = player1;
  }
}

function Player() {
  this.counter = [];
  this.record = 0;
  this.playerName = "";
}

function assignCounters() {
  if (round % 2 === 0) {
    player1.counter = ["O", "O", "O", "O", "O"];
    player1.playerName = "Player O";
    player2.counter = ["X","X","X","X"];
    player2.playerName = "Player X";
  } else {
    player1.counter = ["X", "X", "X", "X", "X"];
    player1.playerName = "Player X";
    player2.counter = ["O","O","O","O"];
    player2.playerName = "Player O";
  }
}

function gameLogic(id, elementNum){
  if (board[elementNum] === undefined) {
    var playerCounter = playerTurn.counter.pop();
    $("#"+ id + " span").text(playerCounter);
    board[elementNum] = playerCounter;
    turn++;
    checkWin(board);
    checkPlayerTurn();
  }
}

function listener() {
    var id = $(this).attr('id');
    var elementNum = parseInt(id.slice(-1));
    gameLogic(id, elementNum);
}

$(document).ready(function() {
    assignCounters();
    for (var i = 0; i < 9; i++) {
      document.getElementById("space" + i).addEventListener("click", listener);
    }
});
