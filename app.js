const express = require("express");
const stockList = require("./stock.js");
const app = express();
const Account = require("./account.js");
const manager = require("./stockmanager.js");
const fs = require("fs");
const stockManager = new manager.StockManager([
  new stockList.Stock(100000, 100000, 0.1), // SungSam
  new stockList.Stock(100000, 100000, 0.1), // Kokoa
  new stockList.Stock(100000, 100000, 0.1), // Nestla
  new stockList.Stock(100000, 100000, 0.1), // PineApple
]);
var accountList = [];
var idList = [];
var stockValue = [0, 0, 0, 0];

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
  res.sendFile(__dirname + "/public/test.html");
});

app.post("/login/:ID", (req, res) => {
  let ID = req.params.ID;
  if (idList.includes(ID)) {
    if (accountList.find((account) => account.ID == ID) == null) {
      let account = new Account.Account(ID, 500000);
      accountList.push(account);
      res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(403);
  }
});

app.post("/buy/:ID/:stock/:count", (req, res) => {
  let ID = req.params.ID;
  let count = Number(req.params.count);
  let index = Number(req.params.stock);
  let account = accountList.find((account) => account.ID == ID);
  if (stockManager.buy(account, index, count)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

app.post("/sell/:ID/:stock/:count", (req, res) => {
  let ID = req.params.ID;
  let count = Number(req.params.count);
  let index = Number(req.params.stock);
  let account = accountList.find((account) => account.ID == ID);
  if (stockManager.sell(account, index, count)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

app.post("/updateMoney/:ID", (req, res) => {
  let ID = req.params.ID;
  let account = accountList.find((account) => account.ID == ID);
  res.send({ money: account.money });
});

app.post("/updateStockList/:ID", (req, res) => {
  let ID = req.params.ID;
  let account = accountList.find((account) => account.ID == ID);
  res.send({ stockList: account.stockList });
});

app.post("/updateStockValue/", (req, res) => {
  res.send({ stockValues: stockValue });
});

app.listen(3000, () => {
  console.log("Server On");
});

setInterval(() => {
  for (let i = 0; i < 4; i++) {
    if (stockManager.update(i)) {
      stockValue[i] = stockManager.stockList[i].currentValue;
    } else {
      stockValue[i] = 0;
      accountList.forEach((account) => {
        account.stockList[i] = 0;
      });
    }
  }
  console.log(
    `${stockValue[0]} ${stockValue[1]} ${stockValue[2]} ${stockValue[3]}`
  );
}, 1000);
