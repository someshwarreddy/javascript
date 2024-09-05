// this in arrow functions

 thisArrow = () => {
    console.log(this)
}

function thisNamedfunction() {
    console.log(this)
}

console.log(thisArrow);

console.log(thisNamedfunction)

thisArrow(); // window
thisNamedfunction(); // window

// with constuctor new key word it creats object

  thisArrowconstuct = () => {
    console.log(this)
}



function thisNamedfunctionconstuct() {
    console.log(this)
}



 unnamedFunction = function() {
    console.log(this)
}

// thisNamedfunctionconstuct {}
// [[Prototype]]
// : 
// Object
var thisNamedfunctionconstucted = new thisNamedfunctionconstuct();

// unnamedFunctioned {}
// [[Prototype]]
// : 
// Object
var unnamedFunctioned = new unnamedFunction()

// Uncaught TypeError: thisArrowconstuct is not a constructor because arrow functions working as a value not as function
var thisArrowconstucted = new thisArrowconstuct()

var obj = {
    arrow: () => {},
    fun: function() {}
}

console.log(obj)





