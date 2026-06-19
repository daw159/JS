// ════════════════════════════════════════
//  1. ARITHMETIC OPERATORS
// ════════════════════════════════════════
let a = 10;
let b = 3;

console.log("a + b =", a + b);   // 13  addition
console.log("a - b =", a - b);   // 7   subtraction
console.log("a * b =", a * b);   // 30  multiplication
console.log("a / b =", a / b);   // 3.33 division
console.log("a % b =", a % b);   // 1   remainder (modulus)
console.log("a ** b =", a ** b); // 1000 power (10³)


// ════════════════════════════════════════
//  2. UNARY OPERATORS
// ════════════════════════════════════════
let x = 5;

console.log("x =", x);       // 5

// post-increment — uses value FIRST, then adds 1
console.log("x++ =", x++);  // 5
console.log("x now =", x);  // 6

// pre-increment — adds 1 FIRST, then uses value
console.log("++x =", ++x);  // 7

// post-decrement
console.log("x-- =", x--);  // 7
console.log("x now =", x);  // 6

// pre-decrement
console.log("--x =", --x);  // 5

// unary minus — flips the sign
let n = 10;
console.log("-n =", -n);    // -10


// ════════════════════════════════════════
//  3. ASSIGNMENT OPERATORS
// ════════════════════════════════════════
let num = 20;

num += 5;   console.log("num += 5  →", num);  // 25
num -= 3;   console.log("num -= 3  →", num);  // 22
num *= 2;   console.log("num *= 2  →", num);  // 44
num /= 4;   console.log("num /= 4  →", num);  // 11
num %= 3;   console.log("num %= 3  →", num);  // 2
num **= 4;  console.log("num **= 4 →", num);  // 16


// ════════════════════════════════════════
//  4. COMPARISON OPERATORS
// ════════════════════════════════════════
let p = 5;
let q = "5";
let r = 8;

console.log(p == q);   // true  — same value, ignores type
console.log(p === q);  // false — same value AND type (5 is number, "5" is string)
console.log(p != r);   // true
console.log(p !== q);  // true  — different type
console.log(p > 3);    // true
console.log(p < 3);    // false
console.log(p >= 5);   // true
console.log(p <= 4);   // false

// always use === in real code, never ==


// ════════════════════════════════════════
//  5. LOGICAL OPERATORS
// ════════════════════════════════════════
let isLoggedIn = true;
let isAdmin    = false;
let hasAccess  = true;

// AND — all conditions must be true
console.log(isLoggedIn && isAdmin);   // false
console.log(isLoggedIn && hasAccess); // true

// OR — at least one must be true
console.log(isLoggedIn || isAdmin);   // true
console.log(isAdmin || false);        // false

// NOT — flips true to false, false to true
console.log(!isLoggedIn);  // false
console.log(!isAdmin);     // true

// combining
console.log(isLoggedIn && !isAdmin);  // true — logged in but NOT admin


// ════════════════════════════════════════
//  6. TERNARY OPERATOR
// ════════════════════════════════════════

// syntax: condition ? "if true" : "if false"

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

let score = 75;
let grade = score >= 90 ? "A" : score >= 70 ? "B" : score >= 50 ? "C" : "F";
console.log(grade);   // "B"

// ternary is just a shortcut for if/else — use it for simple one-liners only


// ════════════════════════════════════════
//  7. CONDITIONAL STATEMENTS — if
// ════════════════════════════════════════

let temperature = 38;

if (temperature > 37) {
    console.log("You have a fever!");  // this runs
}

// if the condition is false, nothing happens
if (temperature > 100) {
    console.log("This won't print");
}


// ════════════════════════════════════════
//  8. IF / ELSE
// ════════════════════════════════════════

let marks = 45;

if (marks >= 50) {
    console.log("You passed!");
} else {
    console.log("You failed.");  // this runs because 45 < 50
}

let isRaining = false;

if (isRaining) {
    console.log("Take an umbrella");
} else {
    console.log("Enjoy the weather!");  // this runs
}


// ════════════════════════════════════════
//  9. ELSE IF
// ════════════════════════════════════════

let percentage = 72;

if (percentage >= 90) {
    console.log("Grade: A");
} else if (percentage >= 80) {
    console.log("Grade: B");
} else if (percentage >= 70) {
    console.log("Grade: C");  // this runs — 72 falls here
} else if (percentage >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// JS checks top to bottom and stops at the FIRST true condition


// ════════════════════════════════════════
//  REAL WORLD EXAMPLE — combining everything
// ════════════════════════════════════════

let username  = "Dawood";
let userScore = 85;
let isPremium = true;

if (isPremium && userScore >= 80) {
    console.log(username + " unlocked the premium badge!");  // this runs
} else if (userScore >= 50) {
    console.log(username + " passed but no badge.");
} else {
    console.log(username + " needs more practice.");
}