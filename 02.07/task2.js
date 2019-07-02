/*
	Task 2
*/

function callMaxTimes(numberOfTimes, func) {
  let times = numberOfTimes;

  return () => {
    if (--times) {
      func();
    }
  };
}

function consoleLog() {
  console.log("abc");
}

const callConsoleLog = callMaxTimes(3, consoleLog);

callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => 'abc'
callConsoleLog(); // => nothing happens
