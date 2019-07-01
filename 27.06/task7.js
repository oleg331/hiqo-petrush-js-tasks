/*
	Task 7
*/

function findUser() {
    const [users, checkAge] = [...arguments];
    
    return users.every(checkAge);
}

// Expected result

let users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 23 },
];

findUser(users, (user) => user.age === 22); // => false

users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 22 },
];

findUser(users, (user) => user.age === 22); // => true

users = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 },
];

findUser(users, (user) => user.age < 24); // => true