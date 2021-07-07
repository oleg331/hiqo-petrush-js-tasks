/*
	Task 1
*/

function getChunk(list, count) {
  const listResult = [];

  listResult.push(list.slice(0, count));
  listResult.push(list.slice(count, list.length));

  return listResult;
}

// Expected result

getChunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]
getChunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
