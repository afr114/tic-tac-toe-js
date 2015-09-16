function Player(mark) {
  this.mark = mark;
}

function Space(x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.markedBy = null;
}

Space.prototype.markBy = function(player) {
  this.markedBy = player;
}

function Board() {
  this.spaces = [[new Space(1,1), new Space(2,1), new Space(3,1)],[new Space(1,2), new Space(2,2), new Space(3,2)],[new Space(1,3), new Space(2,3), new Space(3,3)]];
}

Board.prototype.spaceAt = function(x, y) {
  return this.spaces[y-1][x-1];
}
