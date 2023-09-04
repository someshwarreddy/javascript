// object
// object literal syntax

// getting property
let person = {
    name: 'somesh',
    gender: ['male', 'female'],
    //method
    details() {
        return ` person name is ${this.name}`
    },
}
// access the object properties by using (.) notation and btacket [] notation
// object.propertyname dot notation we can access method properly
// object['propertyname'] bracket notation we can use  other variables as properties which are not part of the object 


console.log(person['details()']); // undefined 
console.log(person.details());// person name is somesh
console.log(person['details'])

// let details = person['details']; // returns the function defination
let details = person.details();
console.log(details);

let okey = "name";

person.okey = 'someshhwar reddy'; // creats the new property

person[okey] = 'someshhwar reddy'; // replace name property value somesh to someshwar reddy;

person['okey'] = 'bhimi' // // replace name property value somesh to someshwar reddy;

console.table(person);

// constructing  objects  using function

function personDetails(name) {
    let object = {};
    object.name = name;
    // return function detailss() {
    //   console.log( `${this.name}`)  // undefined because of scope is outside of object
    // }
    object.inforamtion = function detailss() {
        console.log(`i am ${this.name}`)
    }
     return object;
}

let personOne = personDetails('someshwar')
personOne.inforamtion();

// Uncaught TypeError: Cannot read properties of undefined (reading 'name') becuase not return the object from function scope
// rewrite above code like object.inforamtion = function detailss() {
//     console.log( `${this.name}`)
// }

// we can use this key to rewrite the above object instead object name 
// this key  represents the window object or local object where ever we defined the this key 
function personDetail(name) {
    this.name = name;
    this.inforamtion = function detailss() {
        console.log(`i am ${this.name}`)
    }
}

// let personTwo = personDetail('someshwar reedy');
// console.log(personTwo.inforamtion());
// Uncaught ReferenceError: object is not defined
// at personDetail

// because we are not constucted the object for that person detail function
// to remove error use the new key word

let personTwo = new personDetail('someshwar reddy');
personTwo.inforamtion()