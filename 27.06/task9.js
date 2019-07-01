/*
	Task 9
*/

function groupBy(words, checkLength) {
  const wordsObject = words.reduce((item, currentWord) => {
    item[checkLength(currentWord)] = item[checkLength(currentWord)] || [];

    if (item[checkLength(currentWord)]) {
      item[checkLength(currentWord)].push(currentWord);
    }

    return item;
  }, {});

  return wordsObject;
}

// Expected result

groupBy(['one', 'two', 'three'], element => element.length); // => { '3': ['one', 'two'], '5': ['three'] }
