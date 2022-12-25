export class StockApp {
  constructor() {
    this.stockList = ["SungSam", "PineApple", "Kokoa", "Nestla"];
  }

  /**
   *
   * @param {String} ID
   */
  async login(ID) {
    let response = await fetch(location.origin + `/login/${ID}`, {
      method: "POST",
    });
    if (response.ok) {
      alert("로그인 성공");
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {String} ID
   * @param {Number} stock
   * @param {Number} count
   */
  async buy(ID, stock, count) {
    let response = await fetch(location.origin + `/buy/${ID}/${stock}/${count}`, {
      method: "POST",
    });
    if (response.ok) {
      alert(`${this.stockList[stock]}의 주식을 ${count}주 구매하셨습니다.`);
    }
  }

  /**
   *
   * @param {String} ID
   * @param {Number} stock
   * @param {Number} count
   */
  async sell(ID, stock, count) {
    let response = await fetch(location.origin + `/sell/${ID}/${stock}/${count}`, {
      method: "POST",
    });
    if (response.ok) {
      alert(`${this.stockList[stock]}의 주식을 ${count}주 판매하셨습니다.`);
    }
  }

  /**
   *
   * @param {String} ID
   */
  async updateMoney(ID) {
    let response = await fetch(location.origin + `/updateMoney/${ID}`, {
      method: "POST",
    });
    let json = await response.json();
    return json.money;
  }

  /**
   *
   * @param {String} ID
   */
  async updateStockList(ID) {
    let response = await fetch(location.origin + `/updateStockList/${ID}`, {
      method: "POST",
    });
    let json = await response.json();
    return json.stockList;
  }

  async updateStockValue() {
    let response = await fetch(location.origin + '/updateStockValue', {
      method: "POST",
    });
    let json = await response.json();
    return json.stockValues;
  }
}
