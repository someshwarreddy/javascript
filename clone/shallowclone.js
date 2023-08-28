//For shallow copies, only the first-level properties are copied, not the values of nested objects.

let originalObj = {
    like:'cricket',
    firstlevel:{
        secondlevel:'someshwar', // secondlevel;
        secondleveltwo:{
            name:'bhimi',
        }
    },// firstlevel
   
}
console.table(originalObj);

// use ... spread operator and object.assign(), object.create() , Array.from(), array.concat(), array.slice();

let copyObjwithspread = {...originalObj};

console.table(copyObjwithspread);

let copyObjectwithassign = Object.assign({},originalObj);

console.log('assign',copyObjectwithassign);

let copyObjectwithcreate = Object.create(originalObj);

console.log('copyObjectwithcreate',copyObjectwithcreate);

// if we modify the copied object second level values this values replace  the orginal object values.

copyObjwithspread.like= 'bowling'; // originalObj first level value will not effect but copyied object value is new string

copyObjwithspread.firstlevel.secondlevel = 'reddy' // originalObj first level object property value change from someshwar to reddy;

copyObjwithspread.firstlevel.secondleveltwo.name = 'bhimireddy' // originalObj first level object property value change from bhimi to bhimireddy

console.table(copyObjwithspread);

let oArray = [1,2,3,4,5];

console.table(oArray);

let oArraywithslice = oArray.slice();

console.table(oArraywithslice);

let oArraywithconcat = oArray.concat();

console.table(oArraywithconcat);

