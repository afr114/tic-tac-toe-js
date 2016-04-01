var board = [],
  row1,
  row2,
  row3,
  row4,
  row5,
  row6,
  row7,
  row8,
  turn = 1,
  round = 1,
  player1 = new Player(),
  player2 = new Player(),
  playerTurn = player1;

function updatedRowValues(board) {
  row1 = [this.board[0], this.board[1], this.board[2]],
  row2 = [this.board[3], this.board[4], this.board[5]],
  row3 = [this.board[6], this.board[7], this.board[8]],
  row4 = [this.board[0], this.board[3], this.board[6]],
  row5 = [this.board[1], this.board[4], this.board[7]],
  row6 = [this.board[2], this.board[5], this.board[8]],
  row7 = [this.board[0], this.board[4], this.board[8]],
  row8 = [this.board[2], this.board[4], this.board[6]];
}

function checkRow(row) {
  if (row.every(isDefined)) {
    checkWin(row);
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

function isEqual(row) {
  var first = row[0]
  return row.every(function(element) {
        return element === first;
    });
}

function checkWin(row) {
  if (isEqual(row)) {
    gameOver()
    triggerModal.win();
  }
  else {
    checkTie();
  }
}

function checkTie() {
  if (player1.counter.length === 0 && player2.counter.length === 0) {
    triggerModal.tie();
  }
}

var triggerModal = {
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
  (turn % 2 === 0) ? playerTurn = player2 : playerTurn = player1;
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
    updatedRowValues(board);
    rowList = { row1, row2, row3, row4, row5, row6, row7, row8 };
    for (row in rowList) {
      if (rowList[row].length === 3 && rowList[row].some(isDefined)) {
        checkRow(rowList[row]);
      }
    }
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
