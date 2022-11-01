class Coin {
  /**
   *
   * @param {Number?} startValue 코인 처음 시작 가격
   * @param {Number?} fluctuation 코인 가격 변동률
   * @author 김민재
   */
  constructor(startValue, fluctuation) {
    this.startValue = startValue;
    this.fluctuation = fluctuation;
    this.playerData = {};
  }

  /**
   * @param {Number} startValue 코인 처음 시작 가격
   */
  set startValue(startValue) {
    this._startValue = startValue;
    this._current = startValue;
  }

  get startValue() {
    return this._startValue;
  }

  /**
   * @param {Number} fluctuation 코인 가격 변동률
   */
  set fluctuation(fluctuation) {
    this._fluctuation = fluctuation;
  }

  get fluctuation() {
    return this._fluctuation;
  }

  set current(current) {
    this._current = current;
  }

  get current() {
    return this._current;
  }

  /**
   * @description 코인 가격 업데이트
   */
  update() {
    let random = Math.floor(Math.random() * 101);
    let updown = Math.floor(Math.random() * 2);
    if (updown) {
      let current = this._current;
      this._current += Math.floor(
        ((this._fluctuation / 100) * this._startValue * random) / 100
      );
      console.log(
        this._current +
          " ▲" +
          Math.floor((this.current / current - 1) * 100 * 100) / 100 +
          "%"
      );
    } else {
      let current = this._current;
      this._current -= Math.floor(
        ((this._fluctuation / 100) * this._startValue * random) / 100
      );
      if (this._current < 1000) return false;
      console.log(
        this._current +
          " ▼" +
          Math.floor((this.current / current - 1) * 100 * 100) / 100 +
          "%"
      );
    }
    return true;
  }

  /**
   * @description 코인 가격 초기화
   */
   delist() {
    this._current = this._startValue;
    for(let player in this.playerData) {
      this.playerData[player].stock = 0;
    }
  }

  /**
   *
   * @param {String} player
   * @param {Number} count
   * @description 코인 매수
   */
  buy(player, count) {
    let cost = this._current;
    if (this.playerData[player].money < cost * count) {
      return false;
    } else {
      this.playerData[player].stock += count;
      this.playerData[player].money -= cost * count;
      return true;
    }
  }

  /**
   *
   * @param {String} player
   * @param {Number} count
   * @description 코인 매도
   */
  sell(player, count) {
    if (this.playerData[player].stock >= count) {
      this.playerData[player].stock -= count;
      this.playerData[player].money += this._current * count;
      return true;
    } else {
        return false;
    }
  }

  createPlayer(player) {
    this.playerData[player] = {};
    this.playerData[player].money = 1000000;
    this.playerData[player].stock = 0;
  }
}

module.exports = {
  Coin,
};
