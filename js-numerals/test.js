const chai = window.chai
const expect = chai.expect

describe("numberToWord", () => {
  it("Arabic number conversion tool test", () => {
    expect(numberToWord(7)).to.deep.equal("seven")
    expect(numberToWord(42)).to.deep.equal("forty-two")
    expect(numberToWord(1999)).to.deep.equal("one thousand nine hundred and ninety-nine")
    // expect(numberToWord(2001)).to.deep.equal("two thousand and one")
    expect(numberToWord(17999)).to.deep.equal("seventeen thousand nine hundred and ninety-nine")
    expect(numberToWord(342251)).to.deep.equal("three hundred and forty-two thousand two hundred and fifty-one")
    expect(numberToWord(1300420)).to.deep.equal("one million three hundred thousand four hundred and twenty")


    expect(numberToWord(13094250)).to.deep.equal("thirteen million ninety-four thousand two hundred and fifty")
    expect(numberToWord(863994580)).to.deep.equal("eight hundred and sixty-three million nine hundred and ninety-four thousand five hundred and eighty")
  })
})
