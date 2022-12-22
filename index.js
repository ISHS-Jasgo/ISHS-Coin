const coinlib = require("./coin");
const express = require("express");
const stocklib = require("./stock.js");

const coin = new coinlib.Coin();

const app = express();

var delisting = false;

app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/buy/:player/:count", (req, res) => {
  let player = req.params.player;
  let count = Number(req.params.count);
  if (!delisting) {
    if (coin.buy(player, count)) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  }
});

app.post("/sell/:player/:count", (req, res) => {
  let player = req.params.player;
  let count = req.params.count;
  if (!delisting) {
    if (coin.sell(player, count)) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  }
});

app.post("/money/:player", (req, res) => {
  let player = req.params.player;
  if (coin.playerData[player]) {
    let money = coin.playerData[player].money;
    res.send({ money: money });
  }
});

app.post("/join/:player", (req, res) => {
  let player = req.params.player;
  coin.createPlayer(player);
  res.sendStatus(200);
});

app.post("/current", (req, res) => {
  if (delisting) {
    res.send({
      current:
        "상장폐지됨 초기화 될때까지 기다려주세요. 약 10초정도 소요됩니다.",
    });
  } else {
    res.send({ current: coin._current });
  }
});

app.post("/stock/:player", (req, res) => {
  let player = req.params.player;
  res.send({ stock: coin.playerData[player].stock });
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

coin.startValue = 100000;
coin.fluctuation = 50;
setInterval(() => {
  if (!delisting) {
    if (!coin.update()) {
      coin.delist();
      delisting = true;
      setTimeout(() => {
        delisting = false;
      }, 10000);
    }
  }
}, 1000);
