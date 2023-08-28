const originalObject = {
    name: 'someshwar',
  };
  
  // clone with spread operator
  const clonedObject1 = { ...originalObject };
  
  // clone with Object.assign()
  const clonedObject2 = Object.assign({}, originalObject);
  
  // deep cloning with JSON.stringify() and JSON.parse()
  const clonedObject3 = JSON.parse(JSON.stringify(originalObject));
  console.table(clonedObject1);
  console.table(clonedObject2);
  console.table(clonedObject3);
  const clonedObject4 = structuredClone(originalObject);
console.table(clonedObject4)

