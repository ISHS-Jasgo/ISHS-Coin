const { Account } = require("./account");

class StockManager {
  /**
   *
   * @param {Stock[]} stockList
   */
  constructor(stockList) {
    this.stockList = stockList;
  }

  get stockList() {
    return this._stockList;
  }

  set stockList(stockList) {
    this._stockList = stockList;
  }

  /**
   *
   * @param {Number} index
   */
  updown(index) {
    let stock = this._stockList[index];
    stock.updownRate = stock.buyRate / stock.sellRate - 1;
  }

  /**
   *
   * @param {Account} account
   * @param {Number} index
   * @param {Number} count
   * @returns
   */
  sell(account, index, count) {
    let stock = this._stockList[index];
    if (account.stockList[index] >= count) {
      account.money += stock.currentValue * count;
      account.stockList[index] -= count;
      stock.sellRate++;
      this.updown(index);
      return true;
    }
    return false;
  }

  /**
   *
   * @param {Account} account
   * @param {Number} index
   * @param {Number} count
   * @returns
   */
  buy(account, index, count) {
    let stock = this._stockList[index];
    if (account.money >= stock.currentValue * count) {
      account.money -= stock.currentValue * count;
      account.stockList[index] += count;
      stock.buyRate++;
      this.updown(index);
      return true;
    }
    return false;
  }

  /**
   *
   * @param {Number} index
   */
  update(index) {
    let stock = this._stockList[index];
      let random = Math.floor(Math.random() * 200) + 1;
      let updownRate = Math.floor(stock.updownRate);
      let random2 = (Math.floor(Math.random() * 100) + 1) / 100;
      let random3 = (Math.floor(Math.random() * 120) + 1) / 100;
      if (random > 100 - updownRate) {
        stock.currentValue = Math.floor(
          stock.currentValue + stock.currentValue * stock.fluctation * random3
        );
      } else {
        stock.currentValue = Math.floor(
          stock.currentValue - stock.currentValue * stock.fluctation * random2
        );
      }
      return true;
  }
}
module.exports = {
  StockManager,
};
