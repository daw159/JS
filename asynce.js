/******************************************************************
                JAVASCRIPT ASYNCHRONOUS PROGRAMMING
*******************************************************************

Topics Covered

1. Synchronous JavaScript
2. Asynchronous JavaScript
3. Callback Functions
4. Callback Hell
5. Promises
6. .then()
7. .catch()
8. Promise Chaining
9. async / await
10. IIFE (Immediately Invoked Function Expression)

*******************************************************************/



//==============================================================//
// 1. SYNCHRONOUS JAVASCRIPT
//==============================================================//

// JavaScript executes code line by line.

/*
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");

Output

One
Two
Three
Four
*/



//==============================================================//
// 2. ASYNCHRONOUS JAVASCRIPT
//==============================================================//

// Some operations take time.
// Example:
// - Downloading data
// - API requests
// - Database queries

/*
console.log("One");

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("Two");
console.log("Three");

Output

One
Two
Three
Hello after 2 seconds
*/



//==============================================================//
// 3. CALLBACK FUNCTIONS
//==============================================================//

// A callback is a function passed as an argument to another function.

/*
function calculator(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculator(10, 2, add));
console.log(calculator(10, 2, subtract));
console.log(calculator(10, 2, multiply));
*/



//==============================================================//
// 4. CALLBACK HELL
//==============================================================//

// We want to fetch data in order.
//
// Data 1
// ↓
// Data 2
// ↓
// Data 3
// ↓
// Data 4

/*
function getData(dataId, nextData) {

    setTimeout(() => {

        console.log("Data", dataId);

        if (nextData) {
            nextData();
        }

    }, 2000);

}

getData(1, () => {

    getData(2, () => {

        getData(3, () => {

            getData(4);

        });

    });

});
*/



//==============================================================//
// 5. PROMISES
//==============================================================//

// Promise States:
//
// Pending
// Fulfilled
// Rejected

/*
let promise = new Promise((resolve, reject) => {

    console.log("Creating Promise");

    // resolve("Success");

    reject("Something went wrong");

});
*/



//==============================================================//
// 6. .then()
//==============================================================//

/*
const getPromise = () => {

    return new Promise((resolve, reject) => {

        console.log("Promise Started");

        resolve("Data Received");

    });

};

let promise = getPromise();

promise.then((result) => {

    console.log(result);

});
*/



//==============================================================//
// 7. .catch()
//==============================================================//

/*
const getPromise = () => {

    return new Promise((resolve, reject) => {

        reject("Server Error");

    });

};

let promise = getPromise();

promise.catch((error) => {

    console.log(error);

});
*/



//==============================================================//
// 8. PROMISE CHAINING
//==============================================================//

function getData(dataId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Data", dataId);

            resolve("Success");

        }, 2000);

    });

}

/*
getData(1)

.then(() => {

    console.log("Getting Data 2");
    return getData(2);

})

.then(() => {

    console.log("Getting Data 3");
    return getData(3);

})

.then(() => {

    console.log("Getting Data 4");
    return getData(4);

})

.then(() => {

    console.log("All Data Fetched");

})

.catch((error) => {

    console.log(error);

});
*/



//==============================================================//
// 9. async / await
//==============================================================//

// async functions always return a Promise.

async function getAllData() {

    console.log("Getting Data 1");
    await getData(1);

    console.log("Getting Data 2");
    await getData(2);

    console.log("Getting Data 3");
    await getData(3);

    console.log("Getting Data 4");
    await getData(4);

    console.log("Finished");

}

// getAllData();



//==============================================================//
// 10. API SIMULATION
//==============================================================//

function api() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("Weather Data");

            resolve(200);

        }, 2000);

    });

}

async function weatherAPI() {

    console.log("Fetching Weather...");

    await api();

    console.log("Fetching Again...");

    await api();

    console.log("Done");

}

// weatherAPI();



//==============================================================//
// 11. async FUNCTION RETURN VALUE
//==============================================================//

async function myFunction() {

    console.log("Hello");

    return "JavaScript";

}

/*
myFunction().then((result) => {

    console.log(result);

});
*/



//==============================================================//
// 12. IIFE
//==============================================================//

// Immediately Invoked Function Expression

/*
(function () {

    console.log("I run immediately!");

})();
*/



//==============================================================//
// 13. ASYNC IIFE
//==============================================================//

/*
(async function () {

    console.log("Async IIFE Started");

    await getData(10);

    await getData(20);

    console.log("Async IIFE Finished");

})();
*/



//==============================================================//
// 14. Promise.resolve()
//==============================================================//

/*
Promise.resolve("Success")

.then((result) => {

    console.log(result);

});
*/



//==============================================================//
// 15. Promise.reject()
//==============================================================//

/*
Promise.reject("Something Failed")

.catch((error) => {

    console.log(error);

});
*/



//==============================================================//
// 16. Promise.all()
//==============================================================//

/*
Promise.all([

    getData(1),
    getData(2),
    getData(3)

])

.then(() => {

    console.log("All Finished");

});
*/



//==============================================================//
// 17. Promise.race()
//==============================================================//

/*
Promise.race([

    getData(1),
    getData(2),
    getData(3)

])

.then(() => {

    console.log("First Promise Finished");

});
*/



//==============================================================//
// END OF FILE
//==============================================================//

/*

LEARNING ORDER

1. Synchronous JavaScript

↓

2. Asynchronous JavaScript

↓

3. Callback Functions

↓

4. Callback Hell

↓

5. Promises

↓

6. .then()

↓

7. .catch()

↓

8. Promise Chaining

↓

9. async / await

↓

10. IIFE

↓

11. Promise.resolve()

↓

12. Promise.reject()

↓

13. Promise.all()

↓

14. Promise.race()

*/