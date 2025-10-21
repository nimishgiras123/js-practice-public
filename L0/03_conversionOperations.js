// scenarios 1 ( around numbers)
// 1
// let score = "33"
// console.log(typeof score);
// console.log(typeof(score));
// let convertScore = Number(score) //typecast integer string into number datatype
// console.log(convertScore); // 33
// console.log(typeof convertScore); // number as here "33" was converted to 33 using typecasting

// // 2
// score = "33abc" // "33abc" invalid value when converted to number
// convertScore = Number(score) // typecast this invalid value to NaN => (Not a Number) 
// // Nan belongs to Number datatype
// console.log(convertScore); // NaN
// console.log(typeof convertScore); // number

// // 3 (same as in scenario 2)
// score = undefined 
// convertScore = Number(score) 
// console.log(convertScore); // NaN
// console.log(typeof convertScore); //number

// // 4
// score = null
// convertScore = Number(score) // null is represented as 0 when typecasted into number datatype
// console.log(convertScore); // 0
// console.log(typeof convertScore); // number

// // 5
// score = true  // or false
// convertScore = Number(score) 
// console.log(convertScore); // 1 for true and 0 for false
// console.log(typeof convertScore); // number



// Scenarios 2(around booleans)

// 1
// let value = 1
// let convertValue = Boolean(value)
// console.log(convertValue); // 1 => true and 0 => false
// console.log(typeof convertValue); // boolean


// 2
// value = ""
// convertValue = Boolean(value) 
// console.log(convertValue); // false since empty string translates to a false value
// console.log(typeof convertValue); //boolean

// 3
// value = "abc"
// convertValue = Boolean(value)
// console.log(convertValue); // true since a non-emtpy string translates to a true value
// console.log(typeof convertValue); // boolean


// 1 => true / 0 => false
// "" => fasle / "abc" => true


// Scenarios 3(around strings)

// let num = 33 
// let convertNum = String(num)
// console.log(convertNum); // 33
// console.log(typeof convertNum); //string

// ********* Operations **********



// let value = 3;
// let negValue = - value
// console.log(negValue); // -3




// let str1 = "abc"
// let str2 = "cba"
// let str3 = str1 + str2
// console.log(str3); // abccba



// Some cases to be noted :

// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1"+"2"); //12
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32



// console.log(+true); //1
// console.log(+""); //0



// let num1,num2,num3
// num1 = num2 = num3 = 2+2
// console.log(num1,num2,num3); // 4 4 4 



// read prefix and postfix from MDN

// read conversion topic from 
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive












