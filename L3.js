


// ════════════════════════════════════════
//  1. FOR LOOP
// ════════════════════════════════════════
// use when you know exactly how many times to repeat

for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5

// loop through an array
const players = ["Babar", "Rizwan", "Shaheen"];
for (let i = 0; i < players.length; i++) {
    console.log("Player:", players[i]);
}
// Player: Babar
// Player: Rizwan
// Player: Shaheen

// loop backwards
for (let i = 5; i >= 1; i--) {
    console.log("Countdown:", i);
}
// Countdown: 5, 4, 3, 2, 1


// ════════════════════════════════════════
//  2. WHILE LOOP
// ════════════════════════════════════════
// use when you DON'T know how many times to repeat
// keeps running as long as condition is true

let count = 1;
while (count <= 5) {
    console.log("While count:", count);
    count++;   // very important! without this it runs forever (infinite loop)
}
// While count: 1, 2, 3, 4, 5

// real world example — keep asking until valid input
let password = "";
// password = prompt("Enter password:"); // uncomment in browser
// while (password !== "dawood123") {
//     password = prompt("Wrong! Try again:");
// }
// console.log("Access granted!");


// ════════════════════════════════════════
//  3. DO WHILE LOOP
// ════════════════════════════════════════
// runs at least ONCE even if condition is false
// difference from while — checks condition AFTER running

let num = 1;
do {
    console.log("Do-while num:", num);
    num++;
} while (num <= 5);
// Do-while num: 1, 2, 3, 4, 5

// key difference — runs at least once even when condition is false
let x = 100;
do {
    console.log("This runs once even though x > 5:", x);  // prints!
} while (x < 5);

let y = 100;
while (y < 5) {
    console.log("This never runs:", y);  // never prints
}


// ════════════════════════════════════════
//  4. FOR...OF LOOP
// ════════════════════════════════════════
// use for ARRAYS — gives you the VALUE directly
// cleaner than regular for loop for arrays

const scores = [82, 107, 45, 200, 13];
for (let score of scores) {
    console.log("Score:", score);
}
// Score: 82
// Score: 107
// Score: 45
// Score: 200
// Score: 13

// works on strings too — loops over each character
const name = "Dawood";
for (let char of name) {
    console.log("Char:", char);
}
// Char: D, a, w, o, o, d

// for...of vs regular for loop
// regular for loop               for...of loop
// for(let i=0; i<arr.length; i++) for(let item of arr)
// arr[i]  ← need index           item ← get value directly


// ════════════════════════════════════════
//  5. FOR...IN LOOP
// ════════════════════════════════════════
// use for OBJECTS — gives you the KEY of each property

const player = {
    name: "Babar Azam",
    age: 29,
    country: "Pakistan",
    runs: 3000
};

for (let key in player) {
    console.log(key, ":", player[key]);
}
// name    : Babar Azam
// age     : 29
// country : Pakistan
// runs    : 3000

// for...of vs for...in — easy rule:
// for...of  → arrays  (gives VALUES)
// for...in  → objects (gives KEYS)


// let num=25;

// let input=prompt("Enter the number");
// while(input!==num){
//     if(input<num){
//         console.log("Guess higher");
//     }
//     else if(input>num){
//         console.log("Guess lower");
//     }
//     else{
//         console.log("You are correct");
//         break;
//     }
//     input=prompt("Enter again : ");
// }



// ════════════════════════════════════════
//  6. STRINGS IN JS
// ════════════════════════════════════════
// a string is a sequence of characters
// can use single quotes, double quotes, or backticks

let str1 = 'Hello';           // single quotes
let str2 = "World";           // double quotes
let str3 = `Hello World`;     // backticks (template literal)

// strings are indexed just like arrays — starts at 0
let city = "Lahore";
console.log(city[0]);         // "L"
console.log(city[1]);         // "a"
console.log(city.length);     // 6

// strings are IMMUTABLE — you cannot change a character directly
city[0] = "X";                // silently fails — no error but no change
console.log(city);            // still "Lahore"


// ════════════════════════════════════════
//  7. TEMPLATE LITERALS
// ════════════════════════════════════════
// use backticks ` instead of quotes
// lets you embed variables directly inside the string using ${}
// no more messy string concatenation with +

let firstName = "Dawood";
let age2 = 20;
let course = "Web Development";

// old way — string concatenation (messy)
console.log("My name is " + firstName + " and I am " + age2 + " years old.");

// new way — template literal (clean)
console.log(`My name is ${firstName} and I am ${age2} years old.`);

// you can put any expression inside ${}
console.log(`2 + 2 = ${2 + 2}`);                    // 2 + 2 = 4
console.log(`Next year I will be ${age2 + 1}`);      // Next year I will be 21
console.log(`Course: ${course.toUpperCase()}`);       // Course: WEB DEVELOPMENT

// multi-line strings — backticks support line breaks directly
let message = `Hello ${firstName},
Welcome to ${course}.
Your age is ${age2}.`;
console.log(message);




// let name=prompt("Enter the name: ");
// let res=`@${name}123`;
// console.log(res);





// ════════════════════════════════════════
//  8. STRING METHODS
// ════════════════════════════════════════

let str = "  Hello World  ";

// ── length ───────────────────────────────
console.log("hello".length);              // 5

// ── case ─────────────────────────────────
console.log("hello".toUpperCase());       // "HELLO"
console.log("HELLO".toLowerCase());       // "hello"

// ── trim — remove whitespace ─────────────
console.log("  hello  ".trim());          // "hello"
console.log("  hello  ".trimStart());     // "hello  "
console.log("  hello  ".trimEnd());       // "  hello"

// ── includes — does it contain this? ─────
console.log("Lahore Pakistan".includes("Pakistan"));  // true
console.log("Lahore Pakistan".includes("India"));     // false

// ── indexOf — where is it? ───────────────
console.log("Hello World".indexOf("World"));   // 6  (position it starts)
console.log("Hello World".indexOf("xyz"));     // -1 (not found)

// ── slice — cut a part out ───────────────
// slice(startIndex, endIndex) — endIndex not included
console.log("Hello World".slice(0, 5));    // "Hello"
console.log("Hello World".slice(6));       // "World" (till end)
console.log("Hello World".slice(-5));      // "World" (from end)

// ── replace ──────────────────────────────
console.log("Hello World".replace("World", "Dawood"));  // "Hello Dawood"
console.log("aabbcc".replaceAll("b", "x"));             // "aaxxcc"

// ── split — string into array ─────────────
console.log("a,b,c".split(","));           // ["a", "b", "c"]
console.log("Hello".split(""));            // ["H","e","l","l","o"]

// ── startsWith / endsWith ─────────────────
console.log("Hello World".startsWith("Hello"));   // true
console.log("Hello World".endsWith("World"));     // true

// ── repeat ───────────────────────────────
console.log("Ha".repeat(3));              // "HaHaHa"

// ── charAt ───────────────────────────────
console.log("Hello".charAt(1));           // "e"  same as "Hello"[1]

// ── padStart / padEnd ─────────────────────
// pad to a certain length with a character
console.log("5".padStart(3, "0"));        // "005"  useful for formatting
console.log("5".padEnd(3, "0"));          // "500"


// ════════════════════════════════════════
//  REAL WORLD EXAMPLE — combining everything
// ════════════════════════════════════════

const cricketers = ["Babar Azam", "Virat Kohli", "Joe Root", "Kane Williamson"];

console.log("=== Squad List ===");
for (let i = 0; i < cricketers.length; i++) {
    let player2 = cricketers[i];
    console.log(`${i + 1}. ${player2.toUpperCase()} (${player2.length} characters)`);
}

// search
let search = "Virat Kohli";
if (cricketers.includes(search)) {
    console.log(`\n${search} is in the squad!`);
} else {
    console.log(`\n${search} is NOT in the squad.`);
}