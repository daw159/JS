

//====================================================
// OBJECTS AND CLASSES TUTORIAL
//====================================================


//====================================================
// 1. OBJECT LITERAL
//====================================================

const student = {
    name: "Ali",
    age: 20,
    cgpa: 3.8,

    study() {
        console.log(this.name + " is studying.");
    }
};

console.log(student.name);
console.log(student.age);

student.study();


//====================================================
// 2. ADDING NEW PROPERTY
//====================================================

student.city = "Lahore";

console.log(student);


//====================================================
// 3. CHANGING PROPERTY
//====================================================

student.age = 21;

console.log(student.age);


//====================================================
// 4. DELETING PROPERTY
//====================================================

delete student.cgpa;

console.log(student);


//====================================================
// 5. ACCESSING PROPERTIES
//====================================================

console.log(student.name);

console.log(student["city"]);


//====================================================
// 6. this KEYWORD
//====================================================

const person = {
    name: "Ahmed",

    greet() {
        console.log("Hello");
        console.log(this.name);
    }
};

person.greet();


//====================================================
// 7. OBJECTS INSIDE OBJECTS
//====================================================

const employee = {

    name: "Sara",

    address: {

        city: "Karachi",

        country: "Pakistan"

    }

};

console.log(employee.address.city);


//====================================================
// 8. FOR...IN LOOP
//====================================================

for (let key in student) {

    console.log(key, student[key]);

}


//====================================================
// 9. CONSTRUCTOR FUNCTION (OLD WAY)
//====================================================

function Car(name, color) {

    this.name = name;

    this.color = color;

}

const car1 = new Car("Honda", "Black");

console.log(car1);


//====================================================
// 10. CLASS
//====================================================

class Animal {

    eat() {

        console.log("Eating...");

    }

    sleep() {

        console.log("Sleeping...");

    }

}

const dog = new Animal();

dog.eat();

dog.sleep();


//====================================================
// 11. CONSTRUCTOR
//====================================================

class Student {

    constructor(name, age) {

        this.name = name;

        this.age = age;

    }

    intro() {

        console.log("Name:", this.name);

        console.log("Age:", this.age);

    }

}

const s1 = new Student("Ali", 20);

s1.intro();


//====================================================
// 12. MULTIPLE OBJECTS
//====================================================

const s2 = new Student("Ahmed", 22);

const s3 = new Student("Sara", 19);

s2.intro();

s3.intro();


//====================================================
// 13. INHERITANCE
//====================================================

class Vehicle {

    start() {

        console.log("Vehicle Started");

    }

}

class Bike extends Vehicle {

    ride() {

        console.log("Bike Riding");

    }

}

const bike1 = new Bike();

bike1.start();

bike1.ride();


//====================================================
// 14. METHOD OVERRIDING
//====================================================

class Parent {

    hello() {

        console.log("Hello from Parent");

    }

}

class Child extends Parent {

    hello() {

        console.log("Hello from Child");

    }

}

const c = new Child();

c.hello();


//====================================================
// 15. SUPER KEYWORD
//====================================================

class Person {

    constructor(name) {

        this.name = name;

    }

}

class Teacher extends Person {

    constructor(name, subject) {

        super(name);

        this.subject = subject;

    }

    show() {

        console.log(this.name);

        console.log(this.subject);

    }

}

const t1 = new Teacher("Bilal", "Math");

t1.show();


//====================================================
// 16. STATIC METHOD
//====================================================

class MathHelper {

    static add(a, b) {

        return a + b;

    }

}

console.log(MathHelper.add(5, 8));


//====================================================
// 17. INSTANCEOF
//====================================================

console.log(t1 instanceof Teacher);

console.log(t1 instanceof Person);

console.log(t1 instanceof Animal);


//====================================================
// 18. PROTOTYPE
//====================================================

function Mobile(name) {

    this.name = name;

}

Mobile.prototype.call = function () {

    console.log(this.name + " Calling...");

};

const m1 = new Mobile("Samsung");

m1.call();


//====================================================
// 19. OBJECT.KEYS()
//====================================================

console.log(Object.keys(student));


//====================================================
// 20. OBJECT.VALUES()
//====================================================

console.log(Object.values(student));


//====================================================
// 21. OBJECT.ENTRIES()
//====================================================

console.log(Object.entries(student));


//====================================================
// 22. SPREAD OPERATOR
//====================================================

const obj1 = {

    a: 1,

    b: 2

};

const obj2 = {

    ...obj1,

    c: 3

};

console.log(obj2);


//====================================================
// 23. DESTRUCTURING
//====================================================

const { name, city } = student;

console.log(name);

console.log(city);


//====================================================
// 24. OPTIONAL CHAINING
//====================================================

console.log(employee.address?.city);

console.log(employee.office?.room);


//====================================================
// 25. OBJECT ASSIGN
//====================================================

const copy = Object.assign({}, student);

console.log(copy);


//====================================================
// END
//====================================================
// const studnet={
//     name:"M dawood",
//     roll:30,
//     marks:98.7,
//     printmarks: function(){
//         console.log("marks is ",this.marks);
//     }

// }

// const employee={
//     func1(){
//         console.log("tax is 10%");
//     },

//     func2:function(){
//         console.log("Tax is 20 percnet");
//     }
// }

// thses are two ways to write the function in teh object

// prototype mens reference to an object



// const david ={
//     salary:5000,
//     func1(){
//         console.log("tax free");
//     }

// }


// david.__proto__=employee;



class Car {

    constructor(){
        console.log("Constructor was created");
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setbrand(brand){
        this.brandname=brand;
    }



}

let fortuner=new Car();
fortuner.setbrand("Toyata");



