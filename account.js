class Account {
    /**
     * 
     * @param {String} ID 
     * @param {Number} money 
     */
    constructor(ID, money) {
        this.ID = ID;
        this.money = money;
        this.stockList = [0, 0, 0, 0];
        this.isBanned = false;
    }

    get ID() {
        return this._ID;
    }

    get money() {
        return this._money;
    }

    get stockList() {
        return this._stockList;
    }

    get isBanned() {
        return this._isBanned;
    }

    set ID(ID) {
        this._ID = ID;
    }

    /**
     * @param {Number} money
     */
    set money(money) {
        this._money = money;
    }

    /**
     * @param {boolean} isBanned
     */
    set isBanned(isBanned) {
        this._isBanned = isBanned;
    }

    set stockList(stockList) {
        this._stockList = stockList;
    }
}

module.exports = {
    Account
}