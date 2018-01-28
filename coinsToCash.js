// Define an object and store it in a variable named piggyBank. The object should have the following keys defined.

// quarters
// nickels
// dimes
// pennies
// For each coin type, give yourself as many as you like.

// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

// When done, output the value to the browser console.

// For example, if my piggy bank only held those pennies from above, when I type the variable name of dolllarAmount into the console, the output would be.

// > dollarAmount
// $3.42

// I like pennies
// const piggyBank = { pennies: 342, nickels: 100, dimes: 50, quarters: 80 }
//Test to see math conversion for coins
// console.log("$" + piggyBank.pennies / 100);

const piggyBank = { pennies: 342, nickels: 100, dimes: 50, quarters: 80 };
let dollarAmount = 0;

let p = piggyBank.pennies / 100;
let n = piggyBank.nickels / 20;
let d = piggyBank.dimes / 10;
let q = piggyBank.quarters / 4;

dollarAmount = p + n + d + q;

// console.log("$" + dollarAmount);

document.getElementById("money").innerHTML = "You have <strong>$" + dollarAmount + "</strong> in your piggy bank.";



