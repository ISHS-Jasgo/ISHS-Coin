import { StockApp } from './stockapp.js';

const app = new StockApp();
var ID = "";



setInterval(async () => {
    let updatedStockValues = await app.updateStockValue();
    document.getElementById("sungsam").innerHTML = "SungSam: " + updatedStockValues[0] + "원";
    document.getElementById("pineapple").innerHTML = "PineApple: " + updatedStockValues[1] + "원";
    document.getElementById("kokoa").innerHTML = "Kokoa: " + updatedStockValues[2] + "원";
    document.getElementById("nestla").innerHTML = "Nestla: " + updatedStockValues[3] + "원";
}, 1000)