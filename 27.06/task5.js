/*
	Task 5
*/

function convertArrayToObj() {
  let arrayOfArrays = arguments[0],
    resultObject = {};

  arrayOfArrays.map(item => {
      resultObject[item[0]] = item[1];
  })

  console.log(resultObject);
}

// Expected result

convertArrayToObj([["a", 1], ["b", 2]]); // => { 'a': 1, 'b': 2 }
