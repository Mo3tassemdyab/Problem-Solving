// You get an array of numbers, return the sum of all of the positive ones

// * Example [1,-4,7,12] => 1 + 7 + 12 = 20

// & note: if there is nothing to sum, the sum is default to 0  

function sumOfPositive(arr){
// let initValue = 0;
// for(let i = 0; i < arr.length; i++){
//   if (arr[i] > 0) {
//     initValue += arr[i];
//   }
// }
// return initValue;

return arr.filter(function(ele){
  return ele > 0;
})
.reduce(function(acc,curr){
  return acc + curr + 0;
})

}
console.log(sumOfPositive([1,-4,7,12]));
