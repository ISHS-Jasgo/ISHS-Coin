const fs = require('fs');

let str = "";
for (let i = 0; i < 500; i++) {
let randomStr = Math.random().toString(36).substring(2, 12).toUpperCase();
str += randomStr + "\n";
console.log(randomStr);
}

fs.writeFileSync("test.txt", str);