/*
	Task 2
*/

function getSumAdvanced() {
  var totalSum = 0;

  for (var i = 0; i < arguments.length; i++) {
    var elem =
      typeof arguments[i] === "function" ? arguments[i]() : arguments[i];

    if (!isNaN(elem)) totalSum += +elem;
  }

  return totalSum;
}

// Expected result
getSumAdvanced("abc", 1, "2", getNumberTen, getStringTen, getNumberRandom);

function getNumberRandom() {
  // Fix random (value from 0 to 10)
  return (Math.random() * 10).toFixed(0);
}

function getNumberTen() {
  return 10;
}

function getStringTen() {
  return "10";
}
