// Singleton - created by using constructers
// Object.create 

// object literals
// myArray = ["p", "r"] 

const mySym = symbol("key1")

const jsUser = {
    name: "Prashant",
    "Fullname": "Prashant Pandey", //this cannot be accessed  by the .method to print it
    // mySym : "mykey1" //this way mySym is not a symbol but a string
    [mySym]: "mykey1",
    age: 23,
    location: "Noida",
    email: "prashanthts684@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

//chaning values
jsUser.greeting = function(){
    console.log("Hello Js User");
}

jsUser.greeting2 = function(){
    console.log(`Hello ${this.Fullname}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

jsUser.email = "0211csio054@niet.co.in" //email is now changed
Object.freeze(jsUser) // now any futher changes will not be propagated


