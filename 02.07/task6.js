/*
	Task 6
*/

function memoize(calcSum) {
  let args = [];
  let sum = null;

  return (...sumArgs) => {

    if (JSON.stringify(sumArgs) == JSON.stringify(args)) {
      return sum;
    }
    
    args = [].slice.call(sumArgs);
    sum = calcSum(...args);

    return sum;
  }
}

// Expected result

function summ(a, b, c) {
  return a + b + c;
}

const memoizedSumm = memoize(summ);

memoizedSumm(1, 2, 3); // => function summ was called, result 6
memoizedSumm(1, 2, 3); // => function summ was NOT called, result 6 was remembered for arguments 1, 2, 3 and returned
memoizedSumm(4, 2, 3); // => function summ was called, result 9
memoizedSumm(4, 2, 3); // => function summ was NOT called, result 9 was remembered for arguments 4, 2, 3 and returned  
