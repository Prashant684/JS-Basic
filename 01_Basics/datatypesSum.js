// Primitive - 7 types
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol 
// 7. BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false 

const bigNum = 3651746574n
console.log(typeof bigNum);

// Non-primitive or Reference Types
// 1. Array
// 2. Objects
// 3. Functions

// JavaScript is a dynamically typed language. 
// In dynamically typed languages, 
//the data type of a variable is not explicitly declared and 
// can change during the execution of the program. 

const heros = ["Ironman" , "Thor" , "Loki"] //arrays

let myObj= {
    name:"Prashant",
    age: 23
} //object

console.log(myObj);

const myFunction = function(){
    console.log("Hello guys");
}

// Stack (Primitive) - you will get a copy of the variable that you define 

let myYoutubeName= "Shayar"
let anotherName= myYoutubeName
anotherName= "earbuds"

console.log(myYoutubeName); //output - "Shayar"
console.log(anotherName); //output - "earbuds"

// Heap (Non-primitive) - you will get a reference of the original value 

let userOne= {
    email: "user@niet.co.in",
    upi: "user2ybl"
}

let userTwo= userOne

userTwo.email="Prashant@niet.co.in"

console.log(userOne); // output - "Prashant@niet.co.in"
console.log(userTwo); // output- "Prashant@niet.co.in"


