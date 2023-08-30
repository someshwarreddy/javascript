"use strict";
let fetchedpromise = fetch('https://jsonplaceholder.typicode.com/posts/2');
let fetchedpromisetwo = fetch('https://jsonplaceholder.typicode.com/posts');
let result = false;
function testPromise() {
    // begin
    let promise = new Promise(function (resolve, reject) {
        // Make an asynchronous call and either resolve or reject
        if (result) {
            resolve('successfully resoved');
        }
        else {
            reject(new Error('Something is not right!'));
        }
    });
    promise.then((result) => {
        console.log(result);
    })
        .catch((err) => console.log(err))
    // The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available text from mdn.
    // reject  not defined error cause because we are not defined the reject
    fetchedpromise.then((response) => new Promise((resolve, reject) => {
        if (response.status !== 200) {
            reject(new Error(`something is not right!: ${response.status}`));
        }
        resolve(response.json())
    }))
        .then((data) => {
            console.log(data)
        })
        .catch((error) => { console.log(error) })
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
