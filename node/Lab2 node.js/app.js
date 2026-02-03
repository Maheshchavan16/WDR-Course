// Solve the given problem using lodash module in node.js


const _ = require('lodash');

const user = {
  name: 'John',
  age: 25,
  city: 'New York'
};

const userWithoutAge = _.omit(user, ['age']);

const userNameCity = _.pick(user, ['name', 'city']);

console.log("User without age:", userWithoutAge);
console.log("User with name and city:", userNameCity);



//Solve the given problem using lodash module in node.js: 

const _ = require('lodash');

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = _.chunk(array, 3);

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = _.flatten(nestedArray);

console.log("Chunked Array:", chunkedArray);
console.log("Flattened Array:", flattenedArray);


// Solve the given problem using lodash module in node.js 

const _ = require('lodash');

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 20 }
];


const filteredUsers = _.filter(users, user => user.age > 25);

const sortedUsers = _.sortBy(users, ['age']);

console.log("Filtered Users (age > 25):", filteredUsers);
console.log("Sorted Users by age:", sortedUsers);
