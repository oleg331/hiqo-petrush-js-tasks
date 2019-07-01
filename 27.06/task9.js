/*
	Task 9
*/

function groupBy(words, predicate) {
  const wordsObject = words.reduce((item, currentWord) => {
    let value = predicate(currentWord);

    item[value] = item[value] || [];
    item[value].push(currentWord);

    return item;
  }, {});

  return wordsObject;
}

// Expected result

console.log(groupBy(['one', 'two', 'three'], element => element.length)); // => { '3': ['one', 'two'], '5': ['three'] }
