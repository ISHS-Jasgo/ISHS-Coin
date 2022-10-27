const buy = document.getElementById("buy");
const sell = document.getElementById("sell");
const money = document.getElementById("money");
const current = document.getElementById("current");
const stock = document.getElementById("stock");
const nameInput = document.getElementById("name");
const confirmBtn = document.getElementById("confirm");
var nameValue = "";

confirmBtn.addEventListener('click', async () => {
    if (nameInput.value != null) {
        nameValue = nameInput.value;
        await fetch(location.href + `join/${nameValue}`, { method: "POST" });
    }
})

buy.addEventListener("click", async () => {
  let response = await fetch(location.href + `buy/${nameValue}/1`, { method: "POST" });
  if (response.ok) {
    alert("성공적으로 구매하였습니다.");
    let res = await fetch(location.href + `stock/${nameValue}`, { method: "POST" });
    let json = await res.json();
    stock.innerHTML = `현재 가지고 있는 주: ${json.stock}주`;
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
    let res = await fetch(location.href + `stock/${nameValue}`, { method: "POST" });
    let json = await res.json();
    stock.innerHTML = `현재 가지고 있는 주: ${json.stock}주`;
  } else {
    alert("판매 실패");
  }
});

setInterval(async () => {
  let res1 = await fetch(location.href + `money/${nameValue}`, { method: "POST" });
  let res2 = await fetch(location.href + "current/", { method: "POST" });
  let json1 = await res1.json();
  let json2 = await res2.json();
  money.innerHTML = `현재 남은 돈: ${json1.money}원`;
  current.innerHTML = `현재 인곽 코인 가격: ${json2.current}원`;
}, 100);
