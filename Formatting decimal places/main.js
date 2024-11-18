// Description:
// Each Number should be formatted that it is rounded to two decimal places.
// yoy don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34

function twoDecimals(num){
    return Number(num.toFixed(2));
}
console.log(twoDecimals(5.5589));
