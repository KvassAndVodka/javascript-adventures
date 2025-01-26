// - Convert string to number
console.log("String to Number")
let stringToNumber = "50"

stringToNumber = parseInt(stringToNumber)
console.log(stringToNumber);
console.log(typeof stringToNumber);

stringToNumber = "50"
stringToNumber = +stringToNumber
console.log(stringToNumber);
console.log(typeof stringToNumber);

stringToNumber = "50"
stringToNumber = Number(stringToNumber)
console.log(stringToNumber);
console.log(typeof stringToNumber);

//  - Convert number to string
console.log("Number to String")

let numberToString = 50;
numberToString = String(numberToString);
console.log(numberToString);
console.log(typeof numberToString);

numberToString = 50;
numberToString = numberToString.toString();
console.log(numberToString);
console.log(typeof numberToString);

// - Change string to decimal
let stringToFloat = "3.1415";

stringToFloat = parseFloat(stringToFloat);
console.log(stringToFloat);
console.log(typeof stringToFloat);