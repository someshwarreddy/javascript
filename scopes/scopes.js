
// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.
// Function scope: The scope created with a function.

// var scopes
var a;
a = 10;
console.log(`var ${a}`);

// var in function scope

function varScope() {
    a = 110;
    console.log(`var ${a}`);
    var varFuncionScope = 100;
}

// console.log(`varFuncionScope ${varFuncionScope}`);
varScope();
// in block scope 
if (true) {
    a = 200;
    console.log(`var ${a}`);
    var blockScope = 100;
}

console.log(`blockScope outside block ${blockScope}`);

a = 20;

console.log(`var ${a}`);

// let scope

let la;
la = 10;
console.log(`let ${la}`);

// var in function scope

function letScope() {
    la = 110;
    console.log(`let ${la}`);
    let letFunctionScope = 10;

}
// console.log(`letblockScope outside block ${letFunctionScope}`); //Uncaught ReferenceError: letFunctionScope is not defined
letScope();
// in block scope 
if (true) {
    la = 200;
    console.log(`let ${la}`);
    let letblockScope = 100;
}
// console.log(`letblockScope outside block ${letblockScope}`);

la = 20;

console.log(`let ${la}`)

// const scope

const ca = 10;
console.log(ca)

function constScope() {
   const ca = 110;
    console.log(`const ${ca}`); // Uncaught TypeError: Assignment to constant variable.
}
constScope()

