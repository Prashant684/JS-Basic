// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// list of functions of string
const name = "Prashant"
const repoCount = 4

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`); 
//this way of printing variables is called string interpolation 
// this brings the advantage of using various functions directly on the variables.

const gameName = new String('Dark-Lord')
//string is not an array but an object.

console.log(gameName[0]); //string at 0th position

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4) //the last value is not included - this ignores the -ve values
console.log(newString);

const anotherString = gameName.slice(-8,4) //in this the value will start from end
console.log(anotherString);

const newStringOne = "     Prashant    "
console.log(newStringOne);
console.log(newStringOne.trim()); //works on line terminaters and whitespaces


