describe('Player', function() {
  it("assigns a symbol to each player", function() {
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("Y");
    expect(testPlayer1.mark).to.equal("X");
    expect(testPlayer2.mark).to.equal("Y");
  });
});

describe('Space', function() {
  it("returns a player's coordinates", function() {
    var testSpace = new Space(2,3);
    expect(testSpace.xCoordinate).to.equal(2);
    expect(testSpace.yCoordinate).to.equal(3);
  });

  it("lets a player mark their space on the board", function() {
    var testPlayer1 = new Player("X");
    var testSpace1 = new Space(2,3);
    var testPlayer2 = new Player("Y");
    var testSpace2 = new Space(1,3);
    testSpace1.markBy(testPlayer1);
    testSpace2.markBy(testPlayer2);
    expect(testSpace1.markedBy).to.equal(testPlayer1);
    expect(testSpace2.markedBy).to.equal(testPlayer2);
  });
});
