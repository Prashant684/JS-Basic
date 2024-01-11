const tinderUser = new Object() //singleton object
const tinderUser2 = {} //now singleton

tinderUser.id = "2101331550061"
tinderUser.name = "Prashant"
tinderUser.isLoggedIn = false

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
    email: "0211csio9054@google.com",
    userFullName: {
        firstname: "Prashant",
        lastname: "Pandey"
    }
}

console.log(regularUser.userFullName.firstname);
console.log(tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj5 = {...obj1, ...obj2, ...obj4}
console.log(obj3);
console.log(obj5);



