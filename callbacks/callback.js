function a(callback) {
    callback()
    console.log('a');

}

function b() {
    console.log('b');
}

a(b)

// callback hell
function one(callbackone) {
    callbackone(1)
}

function two(callbacktwo) {
    callbacktwo(2)
}

function three(callbackthree) {
    callbackthree(3)
}

function makeSomthing() {
    one(() => {
        two(() => {
            three(() => {
                console.log('callbackhell')
            })
        })
    })
}

makeSomthing()

// solution 
// 1 write proper comments
// 2 split the code declarative way
// 3 use promises 
// 4 use async await 

let ms = () => {
    let one = one(() => {
    })
    let two = two(() => {
    })
}
