/*
	Task 5
*/

const debounce = (() => {
  let timer;
  return function (showDate, ms) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(showDate, ms);
  };

})();

// Expected result

function dateNow() {
  console.log(Date.now());
}

// First case
debounce(dateNow, 1000); // => would be called in 1 second

// ...

// Second case
debounce(dateNow, 100); // => canceled
debounce(dateNow, 150); // => canceled
debounce(dateNow, 170); // => would be called only last, previous would be canceled
