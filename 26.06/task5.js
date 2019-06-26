/*
	Task 5
*/

function getStringLadder(string, func) {
  if (!string.length) showConsole('Пожалуйста, заполните строку!');

  while (string.length) {
    showConsole(string);
    string = string.slice(0, -1);
  }
}

function showConsole(value) {
  console.log(value);
}

// Expected result
getStringLadder("qwerty", consoleLog);
