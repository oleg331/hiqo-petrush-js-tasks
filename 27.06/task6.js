/*
	Task 6
*/

function uniq(list) {
  const listRepeated = list.filter(
      item => list.indexOf(item) === list.lastIndexOf(item)
    );

  return listRepeated;
}

// Expected result

uniq([2, 1, 2, 5, 6, 5, 7]); // => [1, 6, 7]
