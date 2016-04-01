chai.should()

describe('isDefined', function() {
  it("checks to see if element is defined", function() {
    var board1 = ["X"];
    var board2 = [];
    expect(isDefined(board1[0])).to.equal(true);
    expect(isDefined(board2[0])).to.equal(false);
  });
});

describe('isEqual', function() {
  it("checks if all elements in array are the same", function() {
    var row1 = ["X", "X", "X"];
    var row2 = ["X", "O", "X"];
    expect(isEqual(row1)).to.equal(true);
    expect(isEqual(row2)).to.equal(false);
  });
});

describe('checkRow', function() {
  it("checks to see that there is no empty spaces in row then calls checkWin", function() {
      var row1 = ["X", "X", undefined];
      var row2 = ["X", "X", "X"];
      var functionCall = 0;
      var stub = sinon.stub(window, "checkWin", function() { functionCall ++ });
      expect(checkRow(row1)).to.equal(false);
      checkRow(row2)
      expect(functionCall).to.equal(1);
      stub.restore();
  });
});

describe('checkWin', function() {
  it("checks to see which player has won or if the game tied", function() {
    var row1 = ["X", "X", "X"];
    var row2 = ["O", "X", "O"];
    var gameOverFunctionCall = 0;
    var checkTieFunctionCall = 0;
    var stub1 = sinon.stub(window, "gameOver", function() { gameOverFunctionCall++ });
    var stub2 = sinon.stub(window, "checkTie", function() { checkTieFunctionCall++ });
    checkWin(row2)
    expect(checkTieFunctionCall).to.equal(1);
    checkWin(row1);
    expect(gameOverFunctionCall).to.equal(1);
    stub1.restore();
    stub2.restore();
  });
});
