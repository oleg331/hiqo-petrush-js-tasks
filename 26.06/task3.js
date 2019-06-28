/*
	Task 3
*/

function isValueExists(value) {
  return value === null 
    ? false 
    : !isNaN(value) 
    ? !isNaN(value) 
    : false;
}

// Expected result
isValueExists(1); // => true
isValueExists(0); // => true
isValueExists('12'); // => true
isValueExists(''); // => true
isValueExists(false); // => true
isValueExists(undefined); // => false
isValueExists(null); // => false
