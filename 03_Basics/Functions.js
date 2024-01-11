function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("U");
    }
// sayMyName()

/*function add(num1, num2){ //here num1 and num2 are parameters
    console.log(num1 + num2 );
}

add(7,8) // 7 and 8 here are arguments
add(6, "a")
add(3,null)
*/

//const result = add(3,5)
// console.log("Result: ", result); 
// here it will print that the result is undefined because when we defined the function we didn't 
// define it to return the sum but to just print the sum, hence no value is being stored in the 
// 'result' variable as no value has been returned but simply the addition of thwe 2 nums are printed.

function add(num1, num2){
   // let result = num1 + num2
   // return result
    return num1 + num2
}

const result = add(3, 5)
//console.log("Result: ", result);

function loginUserMessage(username){
    if (username === undefined){ //if(!username)
        console.log("Please enter a Username");
        return
    }
        return `${username} just logged in`
}

// console.log(loginUserMessage("Prashant"));
// console.log(loginUserMessage());
// if you don't pass a parameter then the result will be undefined

// Functions with array and objects

function calculateCartPrice(...num1){ 
    // here ... is rest operator not spread operator. 
    //it totally depends on how you use this operator to call it either rest or spread
    return num1
}
// console.log(calculateCartPrice(200, 300, 500));

const user = {
    username: "Prashant",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 300, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));