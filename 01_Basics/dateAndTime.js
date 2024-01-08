let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myCreateDate = new Date(2024, 0, 23)
console.log(myCreateDate.toDateString());
console.log(myCreateDate.getTime());

let myNewDate = new Date("2023-01-23");

let myTimeStamp = new Date.now()
console.log(myTimeStamp);

