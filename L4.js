// ════════════════════════════════════════
//  1. WHAT IS AN ARRAY?
// ════════════════════════════════════════
// an array is an ordered list of values
// can hold any data type — numbers, strings, booleans, objects, even other arrays
// think of it like a numbered shelf — each slot has an index starting from 0

const nums     = [1, 2, 3, 4, 5];
const names    = ["Babar", "Rizwan", "Shaheen"];
const mixed    = [1, "hello", true, null];           // mixed types — allowed in JS
const empty    = [];                                  // empty array
const nested   = [[1, 2], [3, 4], [5, 6]];           // array inside array

// array of objects — most common pattern in real apps
const players = [
    { name: "Babar Azam",  runs: 3000 },
    { name: "Rizwan",      runs: 2100 },
    { name: "Shaheen",     runs: 80   }
];

// ── edge case: typeof array is "object" ───
console.log(typeof nums);           // "object" — NOT "array"!
// correct way to check if something is an array:
console.log(Array.isArray(nums));   // true  ← always use this
console.log(Array.isArray("hi"));   // false
console.log(Array.isArray({}));     // false

// ── edge case: array with holes ───────────
const holey = [1, , , 4];          // empty slots in between
console.log(holey.length);          // 4 — counts holes too!
console.log(holey[1]);              // undefined

// ── edge case: const array is still mutable
const locked = [1, 2, 3];
locked.push(4);                     // ✓ allowed — changing contents is fine
console.log(locked);                // [1, 2, 3, 4]
// locked = [5, 6];                 // ✗ TypeError — reassigning variable blocked


// ════════════════════════════════════════
//  2. ARRAY INDICES
// ════════════════════════════════════════
// each item has a position (index) starting from 0

const fruits = ["apple", "banana", "mango", "orange", "grape"];
//               [0]       [1]       [2]      [3]       [4]

console.log(fruits[0]);             // "apple"  ← first item always [0]
console.log(fruits[2]);             // "mango"
console.log(fruits[4]);             // "grape"  ← last item

// get last item — two ways
console.log(fruits[fruits.length - 1]);  // "grape" ← classic way
console.log(fruits.at(-1));              // "grape" ← modern way
console.log(fruits.at(-2));             // "orange" ← second from last

// change value at an index
fruits[1] = "blueberry";
console.log(fruits);                // ["apple", "blueberry", "mango", "orange", "grape"]

// length
console.log(fruits.length);         // 5

// ── edge case: accessing out of bounds ────
console.log(fruits[10]);            // undefined — no error, just undefined
console.log(fruits[-1]);            // undefined — negative index doesn't work with []
                                    // use .at(-1) for negative indexing instead

// ── edge case: setting index beyond length ─
const a = [1, 2, 3];
a[6] = 99;
console.log(a);                     // [1, 2, 3, empty x3, 99]
console.log(a.length);              // 7 — jumped! holes created in between
console.log(a[4]);                  // undefined

// ── edge case: length is writable ─────────
const b = [1, 2, 3, 4, 5];
b.length = 3;                       // truncates — removes items beyond index 2
console.log(b);                     // [1, 2, 3]
b.length = 6;                       // extends with empty slots
console.log(b);                     // [1, 2, 3, empty x3]


// ════════════════════════════════════════
//  3. LOOPING OVER ARRAYS
// ════════════════════════════════════════

const scores = [82, 107, 45, 200, 13];

// ── regular for loop ─────────────────────
// use when you need the index number
for (let i = 0; i < scores.length; i++) {
    console.log(`Index ${i} → ${scores[i]}`);
}

// ── for...of loop ────────────────────────
// cleanest — use when you only need the value
for (let score of scores) {
    console.log("Score:", score);
}

// ── forEach ──────────────────────────────
// array method version of a loop
scores.forEach((score) => {
    console.log("forEach:", score);
});

// forEach with index
scores.forEach((score, index) => {
    console.log(`${index}: ${score}`);
});

// looping array of objects
players.forEach((player) => {
    console.log(`${player.name} scored ${player.runs} runs`);
});

// ── edge case: forEach cannot be stopped ──
// break and return do NOT stop forEach
const items = [1, 2, 3, 4, 5];

items.forEach((item) => {
    if (item === 3) return;         // only skips THIS iteration (like continue)
    console.log(item);              // prints 1, 2, 4, 5 — does NOT stop at 3
});

// correct — use for...of when you need to stop early
for (let item of items) {
    if (item === 3) break;          // actually stops the loop
    console.log(item);              // prints 1, 2 only
}

// ── edge case: looping empty array ────────
const emptyArr = [];
emptyArr.forEach((item) => console.log(item));  // nothing happens — no error

// ── edge case: modifying array while looping
// RISKY — after splice, indices shift and you skip the next item
// SAFE way — loop backwards when deleting items
const toClean = [1, 2, 3, 4, 5];
for (let i = toClean.length - 1; i >= 0; i--) {
    if (toClean[i] === 3) toClean.splice(i, 1); // safe — no shifting issues
}
console.log(toClean);               // [1, 2, 4, 5]


// ════════════════════════════════════════
//  4. BASIC ARRAY METHODS
// ════════════════════════════════════════

let c = [1, 2, 3, 4, 5];

// ── push — add to END ────────────────────
let pushResult = c.push(6);         // returns NEW length
console.log(pushResult);            // 6
console.log(c);                     // [1, 2, 3, 4, 5, 6]
c.push(7, 8);                       // push multiple at once
console.log(c);                     // [1, 2, 3, 4, 5, 6, 7, 8]

// ── pop — remove from END ────────────────
let popped = c.pop();               // returns REMOVED item
console.log(popped);                // 8
console.log(c);                     // [1, 2, 3, 4, 5, 6, 7]

// ── edge case: pop on empty array ─────────
console.log([].pop());              // undefined — no error

// ── unshift — add to BEGINNING ───────────
c.unshift(0);
console.log(c);                     // [0, 1, 2, 3, 4, 5, 6, 7]

// ── shift — remove from BEGINNING ────────
let shifted = c.shift();
console.log(shifted);               // 0
console.log(c);                     // [1, 2, 3, 4, 5, 6, 7]

// ── includes ──────────────────────────────
console.log(c.includes(3));         // true
console.log(c.includes(99));        // false

// ── edge case: includes handles NaN correctly
console.log([1, 2, NaN].includes(NaN));  // true  ✓
console.log([1, 2, NaN].indexOf(NaN));   // -1    ✗ indexOf fails on NaN

// ── indexOf / lastIndexOf ─────────────────
const d = [10, 20, 30, 20, 10];
console.log(d.indexOf(20));         // 1 — FIRST occurrence
console.log(d.lastIndexOf(20));     // 3 — LAST occurrence
console.log(d.indexOf(99));         // -1 — not found

// ── edge case: indexOf fails on objects ───
const objs = [{ name: "Babar" }, { name: "Rizwan" }];
console.log(objs.indexOf({ name: "Babar" }));  // -1 !! objects compared by reference
// use find() for objects instead
let found = objs.find((o) => o.name === "Babar");
console.log(found);                 // { name: "Babar" } ✓

// ── slice — copy part of array ───────────
// slice(start, end) — end NOT included, does NOT change original
const e = [10, 20, 30, 40, 50];
console.log(e.slice(1, 3));         // [20, 30]
console.log(e.slice(2));            // [30, 40, 50] — till end
console.log(e.slice(-2));           // [40, 50] — last 2
console.log(e.slice(0));            // [10,20,30,40,50] — full copy
console.log(e);                     // [10,20,30,40,50] — original UNCHANGED ✓

// ── splice — add/remove at any position ───
// splice(startIndex, deleteCount, ...itemsToAdd)
// CHANGES the original array
const f = [10, 20, 30, 40, 50];
let removed = f.splice(1, 2);       // remove 2 items at index 1
console.log(removed);               // [20, 30] — returns removed items
console.log(f);                     // [10, 40, 50] — original changed

f.splice(2, 0, 99);                 // add 99 at index 2, remove 0
console.log(f);                     // [10, 40, 99, 50]

// ── edge case: slice vs splice ────────────
// slice  → does NOT change original, returns a copy
// splice → DOES change original, returns removed items
// memory trick: spli[c]e = [c]hanges original

// ── reverse ───────────────────────────────
const original = [1, 2, 3, 4, 5];
original.reverse();
console.log(original);              // [5, 4, 3, 2, 1] — CHANGES original!

// reverse WITHOUT changing original — spread first
const arr2 = [1, 2, 3, 4, 5];
const reversed = [...arr2].reverse();
console.log(arr2);                  // [1, 2, 3, 4, 5] — safe ✓
console.log(reversed);              // [5, 4, 3, 2, 1]

// ── sort ──────────────────────────────────
const letters = ["banana", "apple", "mango"];
letters.sort();
console.log(letters);               // ["apple", "banana", "mango"] ✓

// ── edge case: sort on numbers is WRONG by default ──
const nums2 = [10, 9, 100, 2, 1];
nums2.sort();
console.log(nums2);                 // [1, 10, 100, 2, 9] ✗ WRONG!
// sort converts to strings — "10" < "2" alphabetically

// correct — always pass compare function for numbers
nums2.sort((a, b) => a - b);       // ascending
console.log(nums2);                 // [1, 2, 9, 10, 100] ✓
nums2.sort((a, b) => b - a);       // descending
console.log(nums2);                 // [100, 10, 9, 2, 1] ✓

// ── join — array to string ────────────────
const g = ["Babar", "Rizwan", "Shaheen"];
console.log(g.join(", "));          // "Babar, Rizwan, Shaheen"
console.log(g.join(" | "));         // "Babar | Rizwan | Shaheen"
console.log(g.join(""));            // "BabarRizwanShaheen"

// ── concat — merge arrays ─────────────────
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
console.log(arr3.concat(arr4));     // [1, 2, 3, 4, 5, 6]
console.log([...arr3, ...arr4]);    // [1, 2, 3, 4, 5, 6] — modern spread way

// ── flat — flatten nested arrays ──────────
const nested2 = [1, [2, 3], [4, [5, 6]]];
console.log(nested2.flat());        // [1, 2, 3, 4, [5, 6]]  — one level
console.log(nested2.flat(2));       // [1, 2, 3, 4, 5, 6]    — two levels
console.log(nested2.flat(Infinity));// [1, 2, 3, 4, 5, 6]    — all levels

// ── fill ──────────────────────────────────
const h = [1, 2, 3, 4, 5];
h.fill(0, 2, 4);                    // fill 0 from index 2 to 4
console.log(h);                     // [1, 2, 0, 0, 5]

// ── Array.from ────────────────────────────
console.log(Array.from("hello"));   // ["h","e","l","l","o"]
console.log(Array.from({length: 5}, (_, i) => i + 1));  // [1, 2, 3, 4, 5]


// ════════════════════════════════════════
//  5. HIGHER ORDER ARRAY METHODS
// ════════════════════════════════════════
// these take a function as argument — used EVERYWHERE in real JS and React

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ── map — transform every item ────────────
// returns NEW array of same length, original unchanged
let doubled = numbers.map((n) => n * 2);
console.log(doubled);               // [2,4,6,8,10,12,14,16,18,20]
console.log(numbers);               // original unchanged ✓

// ── edge case: map always returns same length ──
// returning nothing gives undefined for that slot
let badMap = numbers.map((n) => {
    if (n > 5) return n;            // no return for n <= 5
});
console.log(badMap);                // [undefined,undefined,undefined,undefined,undefined,6,7,8,9,10]
// fix: use filter THEN map
let goodMap = numbers.filter((n) => n > 5).map((n) => n * 2);
console.log(goodMap);               // [12, 14, 16, 18, 20] ✓

// ── filter — keep items that pass condition ─
// returns NEW array, can be shorter than original
let evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);                 // [2, 4, 6, 8, 10]

// ── edge case: filter returns empty array — not undefined
let big = numbers.filter((n) => n > 100);
console.log(big);                   // [] ← empty array, not null/undefined
console.log(Array.isArray(big));    // true

// ── find — get FIRST match ────────────────
let firstEven = numbers.find((n) => n % 2 === 0);
console.log(firstEven);             // 2

// ── edge case: find returns undefined if not found
let notFound = numbers.find((n) => n > 100);
console.log(notFound);              // undefined
// always check before using!
if (notFound !== undefined) {
    console.log(notFound * 2);
} else {
    console.log("not found");       // this runs
}

// ── findIndex — index of first match ──────
let idx = numbers.findIndex((n) => n > 5);
console.log(idx);                   // 5 (value 6 is at index 5)
console.log(numbers.findIndex((n) => n > 100));  // -1 if not found

// ── some — does AT LEAST ONE match? ───────
console.log(numbers.some((n) => n > 9));    // true
console.log(numbers.some((n) => n > 99));   // false

// ── edge case: some on empty array = false
console.log([].some((n) => n > 0));         // false

// ── every — do ALL items match? ───────────
console.log(numbers.every((n) => n > 0));   // true
console.log(numbers.every((n) => n > 5));   // false

// ── edge case: every on empty array = true (vacuous truth!)
console.log([].every((n) => n > 100));      // true ← careful with this!

// ── reduce — boil down to ONE value ───────
let sum = numbers.reduce((accumulator, n) => accumulator + n, 0);
console.log(sum);                   // 55

// reduce to find max
let max = numbers.reduce((acc, n) => n > acc ? n : acc, numbers[0]);
console.log(max);                   // 10

// ── edge case: always give initial value in reduce ──
console.log([1,2,3].reduce((acc, n) => acc + n, 0));   // 6  ✓ safe
// console.log([].reduce((acc, n) => acc + n));         // TypeError! empty + no initial value


// ════════════════════════════════════════
//  6. COPYING ARRAYS — VERY IMPORTANT
// ════════════════════════════════════════

// ── edge case: arrays are reference types ─
const original2 = [1, 2, 3];
const badCopy = original2;          // NOT a copy — both point to SAME array!
badCopy.push(4);
console.log(original2);             // [1, 2, 3, 4] — original changed too! ✗

// correct ways to copy (shallow)
const copy1 = [...original2];       // spread — most common
const copy2 = original2.slice();    // slice with no args
const copy3 = Array.from(original2);// Array.from

copy1.push(99);
console.log(original2);             // unchanged ✓
console.log(copy1);                 // [1, 2, 3, 4, 99]

// ── edge case: shallow copy — nested arrays still shared
const nested3 = [[1, 2], [3, 4]];
const shallowCopy = [...nested3];
shallowCopy[0].push(99);
console.log(nested3);               // [[1, 2, 99], [3, 4]] — inner still shared! ✗

// deep copy — use structuredClone for nested arrays/objects
const deepCopy = structuredClone(nested3);
deepCopy[0].push(100);
console.log(nested3);               // [[1, 2, 99], [3, 4]] — fully safe ✓


// ════════════════════════════════════════
//  7. PRACTICE — combining everything
// ════════════════════════════════════════

const cricketers = [
    { name: "Babar Azam",      runs: 3000, country: "Pakistan", active: true  },
    { name: "Virat Kohli",     runs: 5000, country: "India",    active: true  },
    { name: "Joe Root",        runs: 4500, country: "England",  active: true  },
    { name: "Kane Williamson", runs: 3800, country: "NZ",       active: false },
    { name: "Rohit Sharma",    runs: 2900, country: "India",    active: true  },
];

// Q1 — only active players with 3500+ runs
let elite = cricketers.filter((p) => p.active && p.runs >= 3500);
console.log("Elite:", elite.map((p) => p.name));
// ["Virat Kohli", "Joe Root"]

// Q2 — total runs of all players
let totalRuns = cricketers.reduce((acc, p) => acc + p.runs, 0);
console.log("Total runs:", totalRuns);  // 19200

// Q3 — sort by runs descending (copy first — don't mutate original!)
let sorted = [...cricketers].sort((a, b) => b.runs - a.runs);
console.log("Sorted:", sorted.map((p) => `${p.name}: ${p.runs}`));

// Q4 — does any inactive player have 3000+ runs?
let inactiveHighScorer = cricketers.some((p) => !p.active && p.runs >= 3000);
console.log("Inactive high scorer:", inactiveHighScorer);  // true (Kane 3800)

// Q5 — get all names in uppercase
let upperNames = cricketers.map((p) => p.name.toUpperCase());
console.log(upperNames);

// Q6 — find first Indian player
let firstIndian = cricketers.find((p) => p.country === "India");
console.log("First Indian:", firstIndian?.name);  // "Virat Kohli"

// Q7 — are ALL players active?
let allActive = cricketers.every((p) => p.active);
console.log("All active?", allActive);  // false (Kane is inactive)

// Q8 — sum runs of only active players
let activeRuns = cricketers
    .filter((p) => p.active)
    .reduce((acc, p) => acc + p.runs, 0);
console.log("Active players total runs:", activeRuns);  // 15400