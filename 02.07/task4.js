/*
	Task 4
*/

function curry(fn) {
  const countArgs = fn.length;

  return function calculate() {
    return (arguments.length < countArgs) ?
      calculate.bind(this, ...arguments) : fn.call(this, ...arguments);
  }
}

// Expected result

function summ1(a, b, c) {
  return a + b + c;
}

const shellCurry = curry.bind(summ1);
const curriedSumm1 = curry(summ1);

console.log(curriedSumm1(1)(2)(3)); // => 6

function summ2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedSumm2 = curry(summ2);

console.log(curriedSumm2(1)(2)(3)(4)(5)); // => 15

