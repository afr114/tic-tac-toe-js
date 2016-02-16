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
  if (element !== undefined){
    return true;
  } else {
    return false;
  }
}

function checkWin(board) {
  if (checkRow(board[2], board[4], board[6]) || checkRow(board[0], board[4], board[8])) {
    gameOver();
    triggerModal.win();
  }
  else if (checkRow(board[0], board[1], board[2]) || checkRow(board[3], board[4], board[5]) || checkRow(board[6], board[7], board[8])  ) {
    gameOver();
    triggerModal.win();
  }
  else if (checkRow(board[0], board[3], board[6]) || checkRow(board[1], board[4], board[7]) || checkRow(board[2], board[5], board[8])) {
    gameOver();
    triggerModal.win();
  } else {
    checkTie();
  }
}

function checkTie() {
  if (player1.counter.length === 0 && player2.counter.length === 0) {
    triggerModal.tie();
  }
}

triggerModal = {
  win: function() {
    $(document).ready(function(){
      $("h4.modal-title").text(playerTurn.playerName + " Wins");
      $("#myModal").modal();
    });
  },
  tie: function() {
    $(document).ready(function(){
      $("h4.modal-title").text("It's a tie!");
      $("#myModal").modal();
    });
  }
};

function gameOver() {
  for (var i = 0; i < 9; i++) {
    document.getElementById("space" + i).removeEventListener("click", boardListener);
  }
  setRecord();
}

function setRecord() {
  if (playerTurn.playerName === "PlayerX") {
    player1.record++;
    score = player1.record;
    $("#scoreX").text(score);
  } else if (playerTurn.playerName === "PlayerO") {
    player2.record++;
    score = player2.record;
    $("#scoreO").text(score);
  }
}

function checkPlayerTurn() {
  if (turn % 2 === 0) {
    playerTurn = player2;
  }
  else {
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
    player1.playerName = "PlayerO";
    player2.counter = ["X","X","X","X"];
    player2.playerName = "PlayerX";
  } else {
    player1.counter = ["X", "X", "X", "X", "X"];
    player1.playerName = "PlayerX";
    player2.counter = ["O","O","O","O"];
    player2.playerName = "PlayerO";
  }
}

function gameLogic(id, elementNum){
  if (board[elementNum] === undefined) {
    playerCounter = playerTurn.counter.pop();
    $("#"+ id + " span").text(playerCounter);
    board[elementNum] = playerCounter;
    turn++;
    checkWin(board);
    checkPlayerTurn();
  }
}

function boardListener() {
  var id = $(this).attr('id');
  var elementNum = parseInt(id.slice(-1));
  gameLogic(id, elementNum);
}

function setBoardListeners(){
  for (var i = 0; i < 9; i++) {
    document.getElementById("space" + i).addEventListener("click", boardListener);
  }
}

function clearBoard() {
  board = [];
  spaces = $(".space");
  spaces.empty();
}

function newGameListener() {
  clearBoard();
  turn = 1;
  round++;
  assignCounters();
  setBoardListeners();
  checkPlayerTurn();
}

$(document).ready(function() {
  assignCounters();
  setBoardListeners();
  document.getElementsByTagName("button")[0].addEventListener("click", newGameListener);
});
