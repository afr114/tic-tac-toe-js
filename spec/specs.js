describe('isDefined', function() {
  it("checks to see if element is defined", function() {
    var board1 = ["X"];
    var board2 = [];
    expect(isDefined(board1[0])).to.equal(true);
    expect(isDefined(board2[0])).to.equal(false);
  });
});
