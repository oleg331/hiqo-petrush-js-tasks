/*
	Task 4
*/

function flattenDeep(flattenList) {
  let resultList = [];

  function flatArray(flattenList) {
    flattenList.forEach(item => {
      if (Array.isArray(item)) {
        flatArray(item);
      } else {
        resultList.push(item);
      }
    });
  }

  flatArray(flattenList);

  return resultList;
}

// Expected result

flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
