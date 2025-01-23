const sum = require("./index");

if(sum(2, 3) !== 5){
    throw Error("test failed");
}

if(sum(3, 5) !== 8){
    throw Error("test failed");
}

// If no test failed
console.log("success");