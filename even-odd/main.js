// create a function that takes an integer
// as an argument and return 'Even' for even numbers or 'Odd' for odd numbers

// Conditional Statement
// If...else

function evenOdd(num){
    if (num % 2 == 0) return 'Even;'
    else return 'Odd';
}
console.log(evenOdd(8));

// ternary operator

function even_odd(value){
    return value % 2 == 0 ? 'Even' : 'Odd'
}
console.log(even_odd(5));
