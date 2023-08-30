// synchronous blocks the code
console.log('synchronous')
console.log('a');

for (i = 1; i < 1000; i++) {
    console.log(i);

}

console.log('c')

// asynchronous not blocks the code

console.log('asynchronous')
console.log('a');

for (i = 1; i < 1000; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

console.log('c')
