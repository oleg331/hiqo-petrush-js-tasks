/*
	Task 2
*/

function findDifference() {
  let [items1, items2] = [...arguments],
    listResult = [
      ...new Set(
        items1
          .filter(item => !items2.includes(item))
          .concat(items2.filter(item => !items1.includes(item)))
      )
    ];

  return listResult;
}

// Expected result

findDifference([2, 1], [2, 3, 4]); // => [1, 3, 4]
