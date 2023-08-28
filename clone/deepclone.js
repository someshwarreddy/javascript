let originalObj = {
    like:'cricket',
    firstlevel:{
        secondlevel:'someshwar', // secondlevel;
        secondleveltwo:{
            name:'bhimi',
        }
    },// firstlevel
    me: ()=> 'bhimireddy someshwar reddy'
}
console.table(originalObj);

// use ... spread operator Json.parse() Json.stringfy();

let copyObjwithspread = {
    
    ...originalObj,
    firstlevel: {
        ...originalObj.secondleveltwo,
        name:'bhimi reddy'
    }
};

console.table(copyObjwithspread);

// JSON.parse() , JSON.stringify() does not copy method of object in this scenario me is method of originalObj

let copyObjwithjson = JSON.parse(JSON.stringify(originalObj));
copyObjwithjson.firstlevel.secondleveltwo.name ='json'
console.table(copyObjwithjson);
