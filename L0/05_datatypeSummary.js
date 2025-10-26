// javascript is dynamically typed

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive)  and Heap(Non-primitive)

// let myName = "gecko"

// let myName2 = myName
// myName2 = "gecko2"

// console.log(myName2); // gecko2
// console.log(myName); // gecko


// let obj1 = {
//     email : "user@sample.com",
//     name : "user"
// }

// console.log(obj1.email); // user@sample.com

// let obj2 = obj1
// // obj2.email = "user2@sample.com"

// console.log(obj1.email); // user2@sample.com
// console.log(obj2.email); // user2@sample.com

// Primitives are stored on the stack and copied by value, so assigning one variable to another 
// creates an independent copy. Objects/arrays/functions are stored in the heap, with stack 
// holding only references, so multiple variables can point to the same data.