// ^ DESCRIPTION:
// ^ Take an array and remove every second element from the array.
// ^  Always keep the first element and start removing with the next element.

// * Example:
// * ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// * None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(array) {
  // let newArray = [];
  // for(let i = 0; i < array.length; i++){
  //   if (i % 2 == 0) {
  //     newArray.push(array[i]);
  //   }
  // }
  // return newArray;

  return array.filter((ele, i) => i % 2 == 0);
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
