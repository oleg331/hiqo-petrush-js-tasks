/*
	Task 4
*/

function flattenDeep() {
  let flattenList = arguments[0],
    resultList = [];

  (function flatArray(flattenList) {
    flattenList.forEach(item => {
      if (Array.isArray(item)) {
        flatArray(item);
      } else {
        resultList.push(item);
      }
    });
  })(flattenList);

  return resultList;
}

// Expected result

console.log(flattenDeep([1, [2, [3, [4]], 5]])); // => [1, 2, 3, 4, 5]
