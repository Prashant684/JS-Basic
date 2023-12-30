let score = 33
let score2="prashant"
let score3= null
let score4= undefined
let score5= true

//const {score} = req.body

console.log(typeof score);
console.log(typeof(score2));

let valueInNumber = Number(score2)
console.log(typeof(valueInNumber))

console.log(valueInNumber) //output will be 'NaN' 
//the conversion has happened but the value is not carried forward
let valueInNumber3= Number(score3)
console.log(valueInNumber3); //output is  '0'

let valueInNumber4= Number(score4)
console.log(valueInNumber4); //output is 'NaN'

let valueInNumber5 = Number(score5)
console.log(valueInNumber5); //output is '1'

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1==>true ; 0 ==> false
// "" ==> false
// "Prashant" ==> true

let someNum= 33
let stringNum=String(someNum)
console.log(stringNum);
console.log(typeof stringNum);
