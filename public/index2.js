const buy = document.getElementById("buy");
const sell = document.getElementById("sell");
const money = document.getElementById("money");
const current = document.getElementById("current");
const stock = document.getElementById("stock");
const nameInput = document.getElementById("name");
const confirmBtn = document.getElementById("confirm");
var nameValue = "";

confirmBtn.addEventListener("click", async () => {
  if (nameInput.value != null) {
    nameValue = nameInput.value;
    await fetch(location.href + `join/${nameValue}`, { method: "POST" });
  }
});

buy.addEventListener("click", async () => {
  let response = await fetch(location.href + `buy/${nameValue}/1`, {
    method: "POST",
  });
  if (response.ok) {
    alert("성공적으로 구매하였습니다.");
    let res = await fetch(location.href + `stock/${nameValue}`, {
      method: "POST",
    });
    let json = await res.json();
    stock.innerHTML = `현재 가지고 있는 코인: ${json.stock}개`;
  } else {
    alert("구매 실패");
  }
});

sell.addEventListener("click", async () => {
  let response = await fetch(location.href + `sell/${nameValue}/1`, {
    method: "POST",
  });
  if (response.ok) {
    alert("성공적으로 판매하였습니다.");
    let res = await fetch(location.href + `stock/${nameValue}`, {
      method: "POST",
    });
    let json = await res.json();
    stock.innerHTML = `현재 가지고 있는 코인: ${json.stock}개`;
  } else {
    alert("판매 실패");
  }
});

setInterval(async () => {
  let res1 = await fetch(location.href + `money/${nameValue}`, {
    method: "POST",
  });
  let res2 = await fetch(location.href + "current/", { method: "POST" });
  let json1 = await res1.json();
  let json2 = await res2.json();
  let res = await fetch(location.href + `stock/${nameValue}`, {
    method: "POST",
  });
  let json = await res.json();
  money.innerHTML = `현재 남은 돈: ${json1.money}원`;
  if (!Number.isInteger(json2.current)) {
    current.innerHTML = json2.current;
    stock.innerHTML = "현재 가지고 있는 코인: 0개";
  } else {
    current.innerHTML = `현재 인곽 코인 가격: ${json2.current}원`;
  }
  stock.innerHTML = `현재 가지고 있는 코인: ${json.stock}개`;
}, 100);
