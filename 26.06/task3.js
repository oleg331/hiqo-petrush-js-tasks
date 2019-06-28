/*
	Task 3
*/

function isValueExists(value) {
  let result;

  if (value === null) {
    result = false;
  } else if (!isNaN(value)) {
    result = !isNaN(value);
  } else {
    result = false;
  }

  console.log(result)
  return result;
}

// Expected result
isValueExists(1); // => true
isValueExists(0); // => true
isValueExists('12'); // => true
isValueExists(''); // => true
isValueExists(false); // => true
isValueExists(undefined); // => false
isValueExists(null); // => false
