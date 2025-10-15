const accountId = 144553;
let accountEmail = "@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2; // reassigning values of const is not allowed
console.log(accountId);     
console.table([accountId,accountEmail,accountPassword,accountCity])

accountEmail = "@hotmail.com";
accountPassword = "123456";
accountCity = "delhi";

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* Prefer not to use var
because of issue in block scope and functional scope
*/