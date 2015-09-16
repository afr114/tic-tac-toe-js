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
