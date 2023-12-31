const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // for specifying precision value

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //i want precise value focused on given digit, here it is '3'

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // inserts commas according to the US standards
console.log(hundreds.toLocaleString('en-IN'));//inserts commas according to the Indian Standards.

// ****************** Maths *****************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.56));


console.log(Math.random()); //it gives values between 0 and 1
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
consolelog(Math.floor(Math.random()* (max - min + 1)) + min )