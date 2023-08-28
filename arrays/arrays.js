// create unique arrays with Set()
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // [1, 2, 3, 4, 5]

// create unique arrays with Map()
const uniqueArray2 = [
  ...new Map(arrayWithDuplicates.map((item) => [item, true])).keys(),
];

console.log(uniqueArray2); // [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4, 5];

const doubledAndSquared = numbers.map((num) => [num * 2, num * num]);
const flattenedArr = doubledAndSquared.flat();

console.log(doubledAndSquared); // [ [ 2, 1 ], [ 4, 4 ], [ 6, 9 ], [ 8, 16 ], [ 10, 25 ] ]
console.log(flattenedArr); //  [2, 1, 4, 4, 6, 9, 8, 16, 10, 25]

// combine map and flat
const combinedMapAndFlat = numbers.flatMap((num) => [num * 2, num * num]);

console.log(combinedMapAndFlat); // Output: [2, 1, 4, 4, 6, 9, 8, 16, 10, 25];