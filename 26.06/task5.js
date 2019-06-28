/*
	Task 5
*/

function getStringLadder(string, func) {
  if (!string.length) {
    showConsole('Please, fill the line!');
  }

  while (string.length) {
    func(string);
    string = string.slice(0, -1);
  }
}

function showConsole(value) {
  console.log(value);
}

// Expected result
getStringLadder("qwerty", showConsole);
