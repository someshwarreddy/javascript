function a(callback) {
    callback()
    console.log('a');

}

function b() {
    console.log('b');
}

a(b)

// callback hell

function one(callbackhell) {
    callbackhell()
}
one(two)

function two() {
    function three() {
        console.log('callbackhell')
    }
    three()
}

