// 1. Create a function called duplicate
// that given an array input, it will return a new duplicate array

duplicate([1, 2, 3]);
// Returns ==>  [1, 2, 3, 1, 2, 3]


// ------------------------- SOLUTION -------------------------

function duplicate(input) {
  return input.concat(input);
}

result = duplicate([1, 2, 3]);
console.log(result);
