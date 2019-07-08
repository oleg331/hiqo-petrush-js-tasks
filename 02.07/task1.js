/*
	Task 1
*/

function rememberResult(initialValue) {
  let value = initialValue;

  return callback => {
    value = callback(value);
    return value;
  };
}

// Expected result

function doubleValue(value) {
  return 2 * value;
}

const callWithRememberedResult = rememberResult(2);

callWithRememberedResult(doubleValue); // => 4
callWithRememberedResult(doubleValue); // => 8
callWithRememberedResult(doubleValue); // => 16
