"use strict"; // treat all js code as newer version

// alert(3+3); //we are using nodejs, not browser

/*
console.log(3
    + 3
) 
Here JS while parsing the code, it ignored the whitespaces, and we got our output 6
*/

// ecma script organization, defined the specification around javascript,
//  visit https://tc39.es/ecma262/multipage/indexed-collections.html
// and mdn https://developer.mozilla.org/en-US/docs/Web/JavaScript for seeing the documentation

// primitive datatypes
// number => safe range : (2^53 - 1)
// BigInt => to work on integer beyong the number safe range
// boolean => true/false
// string => uses UTF-16 (1 code units(16 bits) if BMP otherwise need two code units(surrogate pair))
// null => used when to represent an empty value 
// undefined => when something is not defined 
// symbol => unique 

// use chatgpt for further clarification since we're just starting out, this is enough for now

// other than primitive datatypes
// Object



console.log(typeof "abc"); // string

// Exception
console.log(typeof null); // object

console.log(typeof undefined); // undefined

