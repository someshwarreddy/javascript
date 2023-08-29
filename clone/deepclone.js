let originalObj = {
    like: 'cricket',
    firstlevel: {
        secondlevel: 'someshwar', // secondlevel;
        secondleveltwo: {
            name: 'bhimi',
        }
    },// firstlevel
    me: () => 'bhimireddy someshwar reddy'
}
console.table(originalObj);

// use ... spread operator Json.parse() Json.stringfy();

let copyObjwithspread = {

    ...originalObj,
    firstlevel: {
        ...originalObj.secondleveltwo,
        name: 'bhimi reddy'
    }
};

console.table(copyObjwithspread);

// JSON.parse() , JSON.stringify() does not copy method of object in this scenario me is method of originalObj

let copyObjwithjson = JSON.parse(JSON.stringify(originalObj));

copyObjwithjson.firstlevel.secondleveltwo.name = 'json';

console.table(copyObjwithjson);

function person(value, age) {
    let person = {};
    person.name = value;
    person.age = age;
    person.type = function () { // this is act as method 
        console.log(this.name);
        return this.name;
    }
    console.log('hi', person, 'bye', this.person) // here this represents window object 
    return person;

}

let male = person('somesh', 36).type();

let female = person('laxmi', 36).type();
