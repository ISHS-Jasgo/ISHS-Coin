import { config1, config2, config3, config4, data1, data2, data3, data4, labels } from "./config.js";
export class StockApp {
  constructor() {
    this.stockList = ["SungSam", "PineApple", "Kokoa", "Nestla"];
  }

  /**
   *
   * @param {String} ID
   */
  async login(ID) {
    let response = await fetch(location.href + `login/${ID}`, {
      method: "POST",
    });
    if (response.ok) {
      alert("");
    }
  }

  /**
   *
   * @param {String} ID
   * @param {Number} stock
   * @param {Number} count
   */
  async buy(ID, stock, count) {
    let response = await fetch(location.href + `buy/${ID}/${stock}/${count}`, {
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
    let response = await fetch(location.href + `sell/${ID}/${stock}/${count}`, {
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
    let response = await fetch(location.href + `/updateMoney/${ID}`, {
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
    let response = await fetch(location.href + `/updateStockList/${ID}`, {
      method: "POST",
    });
    let json = await response.json();
    return json.stockList;
  }

  async updateStockValue() {
    let response = await fetch(location.href + 'updateStockValue', {
      method: "POST",
    });
    let json = await response.json();
    labels.push(String(Number(labels[labels.length - 1]) + 1));
    data1.datasets[0].data.push(json.stockValues[0]);
    data2.datasets[0].data.push(json.stockValues[1]);
    data3.datasets[0].data.push(json.stockValues[2]);
    data4.datasets[0].data.push(json.stockValues[3]);
    return json.stockValues;
  }

  async drawGraph() {
    new Chart(document.getElementById("myChart1"), config1);
    new Chart(document.getElementById("myChart2"), config2);
    new Chart(document.getElementById("myChart3"), config3);
    new Chart(document.getElementById("myChart4"), config4);
  }
}
