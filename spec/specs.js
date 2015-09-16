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
});
