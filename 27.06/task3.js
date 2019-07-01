/*
	Task 3
*/

function findIndex(list, searchItem) {
  const isFunc = searchItem instanceof Function;

  if (isFunc) {
    console.log(list.find(searchItem).name);
    // console.log(searchMethod(list));
  } else console.log(list.indexOf(searchItem));
}

// Expected result

const numbers = [3, 5, 1, 6, 7];

findIndex(numbers, 1); // => 2

const users = [
  { name: 'User1' },
  { name: 'User2' },
  { name: 'User3' },
];

findIndex(users, user => user.name === 'User2'); // => 1
