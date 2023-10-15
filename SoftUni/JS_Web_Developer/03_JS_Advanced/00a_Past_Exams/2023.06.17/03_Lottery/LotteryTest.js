const chai = require("chai");
const assert = chai.assert;
const lottery = require("./Lottery");

describe("Tests for lottery object", function () {
  describe("buyLotteryTicket() tests", function () {
    it("should throw an error if buy is false", function () {
      assert.throws(
        () => lottery.buyLotteryTicket(10, 5, false),
        "Unable to buy lottery ticket!"
      );
    });

    it("should return the correct message when buying tickets", function () {
      const result = lottery.buyLotteryTicket(10, 5, true);
      assert.equal(result, "You bought 5 tickets for 50$.");
    });

    it("should throw an error for invalid input", function () {
      assert.throws(
        () => lottery.buyLotteryTicket("10", 5, true),
        "Invalid input!"
      );
      assert.throws(
        () => lottery.buyLotteryTicket(10, "5", true),
        "Invalid input!"
      );
      assert.throws(
        () => lottery.buyLotteryTicket(10, 5, "true"),
        "Invalid input!"
      );
    });
  });

  describe("checkTicket() tests", function () {
    it("should return jackpot win", function () {
      const ticketNumbers = [1, 2, 3, 4, 5, 6];
      const luckyNumbers = [1, 2, 3, 4, 5, 6];
      const result = lottery.checkTicket(ticketNumbers, luckyNumbers);
      assert.equal(result, "You win the JACKPOT!!!");
    });

    it("should return congratulations message", function () {
      const ticketNumbers = [1, 2, 3, 4, 5, 7];
      const luckyNumbers = [1, 2, 3, 4, 5, 6];
      const result = lottery.checkTicket(ticketNumbers, luckyNumbers);
      assert.equal(result, "Congratulations you win, check your reward!");
    });

    it("should throw an error for invalid input", function () {
      const ticketNumbers = [1, 2, 3, 4, 5];
      const luckyNumbers = [1, 2, 3, 4, 5, 6, 7];
      assert.throws(
        () => lottery.checkTicket(ticketNumbers, luckyNumbers),
        "Invalid input!"
      );
    });
  });

  describe("secondChance() tests", function () {
    it("should return second chance win", function () {
      const ticketID = 123;
      const secondChanceWinningIDs = [123, 124, 125];
      const result = lottery.secondChance(ticketID, secondChanceWinningIDs);
      assert.equal(result, "You win our second chance prize!");
    });

    it("should return sorry message", function () {
      const ticketID = 127;
      const secondChanceWinningIDs = [123, 124, 125];
      const result = lottery.secondChance(ticketID, secondChanceWinningIDs);
      assert.equal(result, "Sorry, your ticket didn't win!");
    });

    it("should throw an error for invalid input", function () {
      const ticketID = "123";
      const secondChanceWinningIDs = [123, 124, 125];
      assert.throws(
        () => lottery.secondChance(ticketID, secondChanceWinningIDs),
        "Invalid input!"
      );
    });
  });
});
