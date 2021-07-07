/*
	Task 8
*/

function findUser(users, predicate) {
  return users.filter(predicate);
}

// Expected result

const users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 }
];

findUser(users, user => user.age < 23); // => [{ name: 'User1', age: 22 }, { name: 'User3', age: 20 }]
