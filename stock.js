class Stock {
    /**
     * 
     * @param {Number} startValue 
     * @param {Number} currentValue 
     * @param {Number} fluctation 
     */
    constructor(startValue, currentValue, fluctation) {
        this.startValue = startValue
        this.currentValue = currentValue;
        this.fluctation = fluctation;
        this.updownRate = 0;
        this.buyRate = 100;
        this.sellRate = 100;
        this.isDelisted = false;
    }

    get startValue() {
        return this._startValue;
    }

    get currentValue() {
        return this._currentValue;
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

    set currentValue(currentValue) {
        this._currentValue = currentValue;
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

    set isDelisted(isDelisted) {
        this._isDelisted = isDelisted;
    }
}

module.exports = {
    Stock
}

