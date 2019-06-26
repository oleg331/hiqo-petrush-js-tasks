/*
	Task 1
*/

function getSum() {
  var totalSum = 0;

  for (var i = 0; i < arguments.length; i++) {
    var elem = arguments[i];

    if (!isNaN(elem)) totalSum += +elem;
  }

  return totalSum;
}

// Expected result
getSum(1, "2", "3", 5, "abc");
