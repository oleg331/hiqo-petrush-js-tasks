/*
	Task 4
*/

// Example with bind
function curry(fn) {
  return function calculate() {
    return (arguments.length < fn.length) ?
      calculate.bind(this, ...arguments) : fn.call(this, ...arguments);
  }
}

// Example base
// function curry(fn) {
//   let args = [];

//   function sum(value) {
//     args.push(value);

//     if (fn.length == args.length) return fn(...args);
//     return sum;
//   }

//   return sum;
// }

// Expected result

function summ1(a, b, c) {
  return a + b + c;
}

const curriedSumm1 = curry(summ1);

console.log(curriedSumm1(1)(2)(3)); // => 6

function summ2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedSumm2 = curry(summ2);

console.log(curriedSumm2(1)(2)(3)(4)(5)); // => 15

