const express = require("express");
const stockList = require("./stock.js");
const app = express();
const Account = require("./account.js");
const manager = require("./stockmanager.js");
const fs = require("fs");
const stockManager = new manager.StockManager([
  new stockList.Stock(), // SungSam
  new stockList.Stock(), // PineApple
  new stockList.Stock(), // Kokoa
  new stockList.Stock(), // Nestla
]);
var accountList = [];
var idList = [];

app.set("port", 3000);
app.use(express.static(__dirname + "/public"));

let str = "";
for (let i = 0; i < 500; i++) {
  let randomStr = Math.random().toString(36).substring(2, 12).toUpperCase();
  str += randomStr + "\n";
  idList.push(randomStr);
  console.log(randomStr);
}
fs.writeFileSync("test.txt", str);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/login/:ID", (req, res) => {
  let ID = req.params.ID;
  if (idList.includes(ID)) {
    let account = new Account.Account(ID, 0, null);
    accountList.push(account);
  }
});

app.post("/buy/:ID/:stock/:count", (req, res) => {
  let ID = req.params.ID;
  let count = Number(req.params.count);
  let index = Number(req.params.stock);
  let account = accountList.filter((account) => account.ID == ID)[0];
  if (stockManager.buy(account, index)) {
    //주식 구매 성공
  } else {
    //주식 구매 실패
  }
});

app.post("/buy/:ID/:stock/:count", (req, res) => {
  let ID = req.params.ID;
  let count = Number(req.params.count);
  let index = Number(req.params.stock);
  let account = accountList.filter((account) => account.ID == ID)[0];
  if (stockManager.sell(account, index)) {
    //주식 판매 성공
  } else {
    //주식 판매 실패
  }
});

app.listen(3000, () => {
  console.log("Server On")
})

setInterval(() => {
  for (let i = 0; i < 4; i++) {
    stockManager.update(i);
    console.log(stockManager.stockList[i].currentValue);
  }
}, 1000);
