const { Account } = require("./account");

class StockManager {
    constructor(stockList) {
        this.stockList = stockList;
    }

    get stockList() {
        return this.stockList;
    }

    /**
     * 
     * @param {Number} index 
     */
    updown(index) {
        let stock = this.stockList[index];
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
        if (account.stockList[index] >= count) {
            account.money += this.stockList[index].currentValue * count; 
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
        if (account.money >= this.stockList[index].currentValue * count) {
            account.money -= this.stockList[index].currentValue * count;
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
        let stock = this.stockList[index];
        let random = Math.floor(Math.random() * 200) + 1;
        let updownRate = Math.floor(stock.updownRate * 100);
        if (random > 100 - updownRate) {
            stock.currentValue += stock.currentValue * stock.fluctation;
        } else {
            stock.currentValue -= stock.currentValue * stock.fluctation;
        }
    }
}
module.exports = {
    StockManager
}