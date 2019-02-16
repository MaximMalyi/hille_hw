//1 
let sum = (...rest) => rest.reduce((prevItem, nextItem) => prevItem + nextItem);
let mul = (...rest) => rest.reduce((prevItem, nextItem) => prevItem * nextItem);

var applyAll = (myFunc, ...rest) => myFunc.apply(this, rest);

console.log(applyAll(sum, 1,2,3,4));
//2 

function fibonacci(ind) {
let ArrayFibonaci = [1,1];
  for (var i = 2; i < 50; i++) {
    ArrayFibonaci[i] = ArrayFibonaci[i-1] + ArrayFibonaci[i-2];
  }
  return ArrayFibonaci[ind];
}
console.log(fibonacci(1));