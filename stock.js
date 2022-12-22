class Stock {
    /**
     * 
     * @param {Number} startValue 
     * @param {Number} currentvalue 
     * @param {Number} fluctation 
     */
    constructor(startValue, currentvalue, fluctation) {
        this.startValue = startValue
        this.currentvalue = currentvalue;
        this.fluctation = fluctation;
        this.updownRate = 1;
        this.buyRate = 100;
        this.sellRate = 100;
    }

    get startValue() {
        return this._startValue;
    }

    get fluctation() {
        return this._fluctation;
    }

    get updownRate() {
        return this._updownRate;
    }

    get buyRate() {
        return this._buyRate;
    }

    get sellRate() {
        return this._sellRate;
    }

    set startValue(startValue) {
        this._startValue = startValue;
    }

    set currentvalue(currentValue) {
        this._currentvalue = currentValue;
    }

    set fluctation(fluctation) {
        this._fluctation = fluctation;
    }

    set buyRate(buyRate) {
        this._buyRate = buyRate;
    }

    set sellRate(sellRate) {
        this._sellRate = sellRate;
    }

    set updownRate(updownRate) {
        this._updownRate = updownRate;
    }
}

module.exports = {
    Stock
}

