class Stock {
    constructor(startValue, currentvalue, fluctation) {
        this.startValue = startValue;
        this.currentvalue = currentvalue;
        this.fluctation = fluctation;
        this.updownRate = 1;
        this.buyRate = 100;
        this.sellRate = 100;
    }

    get startValue() {
        return this.startValue;
    }

    get fluctation() {
        return this.fluctation;
    }

    get updownRate() {
        return this.updownRate;
    }

    get buyRate() {
        return this.buyRate;
    }

    get sellRate() {
        return this.sellRate;
    }

    set buyRate(buyRate) {
        this.buyRate = buyRate;
    }

    set sellRate(sellRate) {
        this.sellRate = sellRate;
    }

    set updownRate(updownRate) {
        this.updownRate = updownRate;
    }
}

module.exports = {
    Stock
}

