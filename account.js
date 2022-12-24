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
        return this.ID;
    }

    get money() {
        return this.money;
    }

    get stockList() {
        return this.stockList;
    }

    get isBanned() {
        return this.isBanned;
    }

    /**
     * @param {Number} money
     */
    set money(money) {
        this.money = money;
    }

    /**
     * @param {boolean} isBanned
     */
    set isBanned(isBanned) {
        this.isBanned = isBanned;
    }
}

module.exports = {
    Account
}