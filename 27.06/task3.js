/*
	Task 3
*/

function findIndex() {
  let [list, position] = [...arguments],
    resultIndex = null;

  list.map((elem, i) => {
    if ((position instanceof Function && position(elem)) || position === i - 1) {
      resultIndex = i;
    }
  });

  return resultIndex;
}

// Expected result

const numbers = [3, 5, 1, 6, 7];

findIndex(numbers, 1); // => 2

const users = [
  { name: 'User1' },
  { name: 'User2' },
  { name: 'User3' },
];

findIndex(users, user => user.name === "User2"); // => 1
