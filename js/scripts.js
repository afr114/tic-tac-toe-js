function Player(mark) {
  this.mark = mark;
}

function Space(x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.markedBy = "";
}

Space.prototype.markBy = function(player) {
  this.markedBy = player;
}

function Board() {
  this.spaces = [ [new Space(0,0), new Space(0,1), new Space(0,2)],
                  [new Space(1,0), new Space(1,1), new Space(1,2)],
                  [new Space(2,0), new Space(2,1), new Space(2,2)] ];
}

Board.prototype.spaceAt = function(x, y) {
  return this.spaces[x][y];
}

//it's not done yet
Board.prototype.win = function(space) {

    var xWin = false
    for(var i = 0; i < 3; i++) {
      if ( this.spaceAt(0,0).markedBy.mark === "X" && this.spaceAt(0,1).markedBy.mark === "X" && this.spaceAt(0,2).markedBy.mark === "X" ) {
        xWin = true;
      } else if  ( this.spaceAt(1,0).markedBy.mark === "X" && this.spaceAt(1,1).markedBy.mark === "X" && this.spaceAt(1,2).markedBy.mark === "X" ) {
        xWin = true;
      } else if ( this.spaceAt(2,0).markedBy.mark === "X" && this.spaceAt(2,1).markedBy.mark === "X" && this.spaceAt(2,2).markedBy.mark === "X" ) {
        xWin = true;
      } else if ( this.spaceAt(0,0).markedBy.mark === "X" && this.spaceAt(1,0).markedBy.mark === "X" && this.spaceAt(2,0).markedBy.mark === "X" ) {
        xWin = true;
      } else if ( this.spaceAt(0,1).markedBy.mark === "X" && this.spaceAt(1,1).markedBy.mark === "X" && this.spaceAt(2,1).markedBy.mark === "X" ) {
        xWin = true;
      } else if ( this.spaceAt(0,2).markedBy.mark === "X" && this.spaceAt(1,2).markedBy.mark === "X" && this.spaceAt(2,2).markedBy.mark === "X" ) {
        xWin = true;
      } else if ( this.spaceAt(0,0).markedBy.mark === "X" && this.spaceAt(1,1).markedBy.mark === "X" && this.spaceAt(2,2).markedBy.mark === "X" ) {
        xWin = true;
      } else if ( this.spaceAt(0,2).markedBy.mark === "X" && this.spaceAt(1,1).markedBy.mark === "X" && this.spaceAt(2,0).markedBy.mark === "X" ) {
        xWin = true;
      }
    }

    if (xWin === true) {
      alert("X Wins");
      location.reload();
    };

    var oWin = false;
    for(var i = 0; i < 3; i++) {
      if ( this.spaceAt(0,0).markedBy.mark === "O" && this.spaceAt(0,1).markedBy.mark === "O" && this.spaceAt(0,2).markedBy.mark === "O" ) {
        oWin = true;
      } else if  ( this.spaceAt(1,0).markedBy.mark === "O" && this.spaceAt(1,1).markedBy.mark === "O" && this.spaceAt(1,2).markedBy.mark === "O" ) {
        oWin = true;
      } else if ( this.spaceAt(2,0).markedBy.mark === "O" && this.spaceAt(2,1).markedBy.mark === "O" && this.spaceAt(2,2).markedBy.mark === "O" ) {
        oWin = true;
      } else if ( this.spaceAt(0,0).markedBy.mark === "O" && this.spaceAt(1,0).markedBy.mark === "O" && this.spaceAt(2,0).markedBy.mark === "O" ) {
        oWin = true;
      } else if ( this.spaceAt(0,1).markedBy.mark === "O" && this.spaceAt(1,1).markedBy.mark === "O" && this.spaceAt(2,1).markedBy.mark === "O" ) {
        oWin = true;
      } else if ( this.spaceAt(0,2).markedBy.mark === "O" && this.spaceAt(1,2).markedBy.mark === "O" && this.spaceAt(2,2).markedBy.mark === "O" ) {
        oWin = true;
      } else if ( this.spaceAt(0,0).markedBy.mark === "O" && this.spaceAt(1,1).markedBy.mark === "O" && this.spaceAt(2,2).markedBy.mark === "O" ) {
        oWin = true;
      } else if ( this.spaceAt(0,2).markedBy.mark === "O" && this.spaceAt(1,1).markedBy.mark === "O" && this.spaceAt(2,0).markedBy.mark === "O" ) {
        oWin = true;
      }
    }

    if (oWin === true) {
      alert("O Wins");
      location.reload();
    };

}

$(document).ready(function() {
  var gameBoard = new Board();
  var playerX = new Player("X");
  var playerO = new Player("O");
  var counter = 0;

  // BOX AT 1,1 //
  $("span#playerXButton-1-1").click(function() {
    gameBoard.spaceAt(0,0).markBy(playerX);
    $("#playerOButton-1-1").hide();
    $('#box-1-1').hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-1-1").click(function() {
    gameBoard.spaceAt(0,0).markBy(playerO);
    $('#box-1-1').hide();
    $('#playerXButton-1-1').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 1,2 //
  $("span#playerXButton-1-2").click(function() {
    gameBoard.spaceAt(0,1).markBy(playerX);
    $("#playerOButton-1-2").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-1-2").click(function() {
    gameBoard.spaceAt(0,1).markBy(playerO);
    $('#playerXButton-1-2').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 1,3 //
  $("span#playerXButton-1-3").click(function() {
    gameBoard.spaceAt(0,2).markBy(playerX);
    $("#playerOButton-1-3").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-1-3").click(function() {
    gameBoard.spaceAt(0,2).markBy(playerO);
    $('#playerXButton-1-3').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 2,1 //
  $("span#playerXButton-2-1").click(function() {
    gameBoard.spaceAt(1,0).markBy(playerX);
    $("#playerOButton-2-1").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-2-1").click(function() {
    gameBoard.spaceAt(1,0).markBy(playerO);
    $('#playerXButton-2-1').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 2,2 //
  $("span#playerXButton-2-2").click(function() {
    gameBoard.spaceAt(1,1).markBy(playerX);
    $("#playerOButton-2-2").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-2-2").click(function() {
    gameBoard.spaceAt(1,1).markBy(playerO);
    $('#playerXButton-2-2').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 2,3 //
  $("span#playerXButton-2-3").click(function() {
    gameBoard.spaceAt(1,2).markBy(playerX);
    $("#playerOButton-2-3").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-2-3").click(function() {
    gameBoard.spaceAt(1,2).markBy(playerO);
    $('#playerXButton-2-3').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 3,1 //
  $("span#playerXButton-3-1").click(function() {
    gameBoard.spaceAt(2,0).markBy(playerX);
    $("#playerOButton-3-1").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-3-1").click(function() {
    gameBoard.spaceAt(2,0).markBy(playerO);
    $('#playerXButton-3-1').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 3,2 //
  $("span#playerXButton-3-2").click(function() {
    gameBoard.spaceAt(2,1).markBy(playerX);
    $("#playerOButton-3-2").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-3-2").click(function() {
    gameBoard.spaceAt(2,1).markBy(playerO);
    $('#playerXButton-3-2').hide();
    gameBoard.win(playerO)
  });

  // BOX AT 3,3 //
  $("span#playerXButton-3-3").click(function() {
    gameBoard.spaceAt(2,2).markBy(playerX);
    $("#playerOButton-3-3").hide();
    gameBoard.win(playerX)
  });

  $("span#playerOButton-3-3").click(function() {
    gameBoard.spaceAt(2,2).markBy(playerO);
    $('#playerXButton-3-3').hide();
    gameBoard.win(playerO)
  });

});
