// array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0])
const myHeroes = ["Shaktiman", "Ironman", "Thor"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])

//Array Methods

myArr.push(6)
console.log(myArr)
myArr.pop() //removes last value

myArr.unshift(9) //shifts all the array elements to insert an element in the starting of the array
console.log(myArr)
myArr.shift()
console.log(myArr) //removes the 1st array elemnt 

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(typeof newArr); //the join operation has converted the new array into string type
console.log(typeof myArr);

//slice and splice


console.log("A ", myArr);
const myn1 =myArr.slice(1,3); //the original array is not manipulated

console.log(myn1);
console.log("B ",myArr);

const myn2 =myArr.splice(1,3); //the original array is manipulated
console.log("C ",myArr);
console.log(myn2);