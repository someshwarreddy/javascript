// var let const

// var is global scoped 
var vd;

vd = 100;
console.log(`var ${vd}`);
// answer is 100

va = 10;
console.log(`var ${va}`);
var va;

//answer is 10 because the variable value does not depend on where you declare the variable value; it depends on where the value is initialized and the global execution phase .

// js engine creates  value as undefined first then assigns value in the execution phase

console.log(`var ${a}`);
var a;
a = 100;

// undefined value because of hoisting memory creation 

// let is block scoped 
let ld;
ld = 100;
console.log(`let ${ld}`)

//let ld ; // throws error because let block scoped
ld = 1000;
console.log(`let ${ld}`) // let also allow reassigning a value to the  declared variable which has the same name

la = 10;
console.log(`let ${la}`);
// Uncaught ReferenceError: Cannot access 'la' before initialization because of let temporaly dead zone
let la;

let vd;

console.log(`let ${vd}`)

// Uncaught SyntaxError: Identifier 'vd' has already been declared


// Const block scoped
console.log(`const ${ca}`);
// Uncaught ReferenceError: Cannot access 'ca' before initialization
const ca = 10;
console.log(`const ${ca}`);

//const ca =100; // Cannot redeclare block-scoped variable 'ca

