const stringNumber = '9'
console.log(typeof (stringNumber));
// change string to nunber 
// +, Number

console.log(typeof (+stringNumber));
const number = Number(stringNumber);
console.log(typeof (number));

// Get a random number/decimal between 0 and 1
xx = Math.random();
console.log(xx);

// Get a random number between 1 and 200
xx = Math.floor(xx * 50 + 1); // any number between and 200

console.log(xx);

const str = 'somesh';
const capitalizedStr = (str) => str.charAt(0).toUpperCase() + str.slice(1)

console.log(str.slice(1, 3))
// removes s and e,s , h from string somesh

console.log(str.split())
// creats the array ['somesh']

console.log(capitalizedStr(str));
console.log(capitalizedStr('satish'));

// Destructuring without default values
const abc = ['A', 'B'];
const [x, y, z] = abc;

console.log(x); //a
console.log(y); //b
console.log(z); //undefined

// Destructuring with default values
const [x1, y2, z3 = 'c'] = abc;

console.log(x1); //a
console.log(y2); //b
console.log(z3); //c

// spread operator 
// with array 

const numArray = [1, 1, 2, 3, 4];
const newArray = [...numArray];

// with object;

const numobj = { 1: 1, 1: 1, 2: 1, 3: 3, 4: 4 };
const newobj = { ...numobj };

console.table('array', newArray, 'object', newobj);

function toTitleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

console.log(toTitleCase('someshwar reddy'));

function sumArguments() {
    // The "arguments" object is array-like
    const argsArray = Array.from(arguments);

    // acc = 1 num=2 t=103 , acc=103 num=3 t= 206, acc=206 num=4 t=310, acc=310 num =5 t=415;
    
    return argsArray.reduce((acc, num) => acc + num + 100); 
  }
  
  const result = sumArguments(1, 2, 3, 4, 5);
  console.table(result); // Output: 415

  const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 },
  { id: 4, name: 'Headphones', price: 100 },
];
// the out put of below find array is returns one value that is id 3
// const cheapProducts = products.find((product) => product.price < 500);

//the out put of below map array is returns boolean value that is object 3, 4 is true other s are false
// const cheapProducts = products.map((product) => product.price < 500);

// use filter method to find all values based on condition
const cheapProducts = products.filter((product) => product.price < 500);

console.log(cheapProducts);

