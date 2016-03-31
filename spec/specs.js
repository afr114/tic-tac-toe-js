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
  it("checks to see if all elements are defined then calls CheckWin", function() {
      var row1 = ["X", "X", undefined];
      var row2 = ["X", "X", "X"];
      var spy = chai.spy();
      expect(checkRow(row1)).to.equal(false);
      expect(spy).to.be.spy;
  });
});
