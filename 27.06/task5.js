/*
	Task 5
*/

function convertArrayToObj(arrayOfArrays) {
  const resultObj = arrayOfArrays.reduce((acc, currentItem) => {
    const [propKey, propValue] = currentItem;
    acc[propKey]= propValue;
    return acc;    
  }, {});

  return resultObj;
}

// Expected result

convertArrayToObj([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
