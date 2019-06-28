/*
	Task 4
*/

function getProduct(funct1, funct2) {
  return funct1(funct2());
}

// Expected result
getProduct(doubleValue, getFour);

function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}
