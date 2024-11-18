// Description:
// Write a function called repeatString which repeats the given
// string src exactly count times.

function repeatString(num, str) {
  let newStr = "";

  for(let i = 0; i < num; i++){
    newStr += str;
  }
  return newStr;
}
console.log(repeatString(3,' hello '));


//================================

function repeat(num, str){
    return str.repeat(num);
}
console.log(repeat(4," hi "));
