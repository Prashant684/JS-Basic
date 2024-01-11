const marvel = ["Thor", "Ironman", "Spiderman"]
const dc= ["Superman", "Flash", "Batman"]

marvel.push(dc) //this creates dc array inside marvel array as an element
console.log(marvel);
console.log(marvel[3][2]); //prints flash

marvel.concat(dc) //this is a new array and the marvel array is not modified
const allHero = marvel.concat(dc)
console.log(marvel);

const allNewHeroes = [...marvel, ...dc]
console.log(allNewHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity) //all the arrays are spread out evenly
console.log(realAnotherArr);

console.log(Array.from("Prashant")); //converts "Prashant" into an array with each letter as an element of an array
console.log(Array.from({name:"Prashant"})); // interesting 

let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //returns new array from set of elements passed



