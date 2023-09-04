import { Observable } from 'rxjs';

const foo = new Observable((subscriber) => {
    console.log('Hello');
    subscriber.next(42);
});

foo.subscribe((x) => {
    console.log(x);
});
foo.subscribe((y) => {
    console.log(y);
});

// Subscribing to an Observable is analogous to calling a Function.
console.log('before');
foo.subscribe((x) => {
    console.log(x);
});
console.log('after');

"before"
"Hello"
42
"after"

// Observables are able to deliver values either synchronously or asynchronously.

function foo() {
    console.log('Hello');
    return 42;
    return 100; // dead code. will never happen
}

const foo = new Observable((subscriber) => {
    console.log('Hello');
    subscriber.next(42);
    subscriber.next(100); // "return" another value
    subscriber.next(200); // "return" yet another
});

console.log('before');
foo.subscribe((x) => {
    console.log(x);
});
console.log('after');

// With synchronous output:

"before"
"Hello"
42
100
200
"after"

// use settimeout for asynchronous

// func.call() means "give me one value synchronously"
// observable.subscribe() means "give me any amount of values, either synchronously or asynchronously"
// observable unicast

// A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

import { Subject } from 'rxjs';

const subject = new Subject<number>(any);

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(1);
subject.next(2);

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2

//Since a Subject is an Observer, this also means you may provide a Subject as the argument to the subscribe of any Observable

//BehaviorSubjects are useful for representing "values over time". For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.

import { BehaviorSubject } from 'rxjs';
const bsubject = new BehaviorSubject(0); // 0 is the initial value ,stores single last value

bsubject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

bsubject.next(1);
bsubject.next(2);

bsubject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

bsubject.next(3);

// Logs
// observerA: 0
// observerA: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3

// A ReplaySubject records multiple values from the Observable execution and replays them to new subscribers.

import { ReplaySubject } from 'rxjs';
const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(5);

// Logs:
// observerA: 1
// observerA: 2
// observerA: 3
// observerA: 4
// observerB: 2
// observerB: 3
// observerB: 4
// observerA: 5
// observerB: 5

AsyncSubject
// The AsyncSubject is a variant where only the last value of the Observable execution is sent to its observers, and only when the execution completes.