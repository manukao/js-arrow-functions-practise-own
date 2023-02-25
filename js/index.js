console.clear();

/* 

3) Write a function that takes an array of numbers as input and returns the sum of all the numbers using an arrow function. For example:
makefile
Copy code
Input: [1, 2, 3, 4, 5]
Output: 15

4) Write a function that takes an array of objects representing people and returns a new array with the full names of all the people using an arrow function. Each object has two properties: firstName and lastName. For example:
css
Copy code
Input: [{ firstName: 'John', lastName: 'Doe' }, { firstName: 'Jane', lastName: 'Doe' }]
Output: ['John Doe', 'Jane Doe']

5) Write a function that takes an array of numbers as input and returns a new array with only the positive numbers using an arrow function. For example:
makefile
Copy code
Input: [-1, 2, -3, 4, -5]
Output: [2, 4]
*/

// The exercise starts here!

// 1) Write a function that takes an array of numbers as input
// and returns a new array with all the even numbers doubled using an arrow function.

const doubleEvenNumbers = (array) => {
  return array.filter((num) => num % 2 === 0).map((num) => num * 2);
};
const input1 = [1, 2, 3, 4, 5];
const output1 = doubleEvenNumbers(input1);
console.log(output1);

// 2) Write a function that takes an array of strings as input
// and returns a new array with all the strings in uppercase using an arrow function.

const uppercaseStrings = (array) => {
  return array.map((str) => str.toUpperCase());
};

const input2 = ["hello", "world"];
const output2 = uppercaseStrings(input2);
console.log(output2); // ['HELLO', 'WORLD']

// 3) Write a function that takes an array of numbers as input
// and returns the sum of all the numbers using an arrow function.

const sumNumbers = (array) => {
  return array.reduce((sum, num) => sum + num, 0);
};

const input3 = [1, 2, 3, 4, 5];
const output3 = sumNumbers(input3);
console.log(output3); // 15

// 4) Write a function that takes an array of objects representing people
// and returns a new array with the full names of all the people using an arrow function.
// Each object has two properties: firstName and lastName.

const getFullNames = (people) => {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
};

const input4 = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Doe" },
];
const output4 = getFullNames(input4);
console.log(output4); // ['John Doe', 'Jane Doe']

// 5) Write a function that takes an array of numbers as input
// and returns a new array with only the positive numbers using an arrow function.

const getPositiveNumbers = (array) => {
  return array.filter((num) => num > 0);
};

const input5 = [-1, 2, -3, 4, -5];
const output5 = getPositiveNumbers(input5);
console.log(output5); // [2, 4]
