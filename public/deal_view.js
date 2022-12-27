import { StockApp } from "./stockapp.js";
const app = new StockApp();
var sungsam;
var pineapple;
var kokoa;
var nestla;
const ID = window.localStorage.getItem("ID");

function requestData() {
  let count = 1;
  setInterval(async () => {
    let updatedStockValues = await app.updateStockValue();
    let point1 = [count, updatedStockValues[0]];
    let point2 = [count, updatedStockValues[1]];
    let point3 = [count, updatedStockValues[2]];
    let point4 = [count, updatedStockValues[3]];
    var series1 = sungsam.series[0],
      shift1 = series1.data.length > 20;
    var series2 = pineapple.series[0],
      shift2 = series2.data.length > 20;
    var series3 = kokoa.series[0],
      shift3 = series3.data.length > 20;
    var series4 = nestla.series[0],
      shift4 = series4.data.length > 20;

    sungsam.series[0].addPoint(point1, true, shift1);
    pineapple.series[0].addPoint(point2, true, shift2);
    kokoa.series[0].addPoint(point3, true, shift3);
    nestla.series[0].addPoint(point4, true, shift4);
    count++;
  }, 30000);
}

async function initializeData() {
  document.getElementById("id").innerHTML = ID;
  document.getElementById("money").innerHTML = await app.updateMoney(ID);
  let stockList = await app.updateStockList(ID);
  document.getElementById("sungsam-count").innerHTML = stockList[0];
  document.getElementById("pineapple-count").innerHTML = stockList[1];
  document.getElementById("kokoa-count").innerHTML = stockList[2];
  document.getElementById("nestla-count").innerHTML = stockList[3];
}

$(document).ready(() => {
  requestData();
  initializeData();
  sungsam = new Highcharts.Chart({
    chart: {
      renderTo: "sg",
      width: 348,
      height: 262
    },
    title: {
      text: "SungSam 현재 가격",
    },
    xAxis: {},
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: {
        text: "원",
      },
    },
    series: [
      {
        name: "주가",
        data: [],
      },
    ],
  });
  pineapple = new Highcharts.Chart({
    chart: {
      renderTo: "pg",
      width: 348,
      height: 262
    },
    title: {
      text: "PineApple 현재 가격",
    },
    xAxis: {},
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: {
        text: "원",
      },
    },
    series: [
      {
        name: "주가",
        data: [],
      },
    ],
  });
  kokoa = new Highcharts.Chart({
    chart: {
      renderTo: "kg",
      width: 348,
      height: 262
    },
    title: {
      text: "Kokoa 현재 가격",
    },
    xAxis: {},
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: {
        text: "원",
      },
    },
    series: [
      {
        name: "주가",
        data: [],
      },
    ],
  });
  nestla = new Highcharts.Chart({
    chart: {
      renderTo: "ng",
      width: 348,
      height: 262
    },
    title: {
      text: "Nestla 현재 가격",
    },
    xAxis: {},
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: {
        text: "원",
      },
    },
    series: [
      {
        name: "주가",
        data: [],
      },
    ],
  });
});
