// OOP - Object Oriented Programming
// const obj = {
//     name: "",
// }
// const obj1 = Object.create({name: "Bob"})
// const obj2 = new Object();

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     intro(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// const p = new Person("Bob", 20);
// console.log(p);
// console.log(p.name, p.age);
// p.intro();

// encapsulation
// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     intro(){
//         console.log(`My name is ${this.#name} and I am ${this.#age} years old.`);
//     }
//     // getter and setter
//     get name(){
//         console.log("Getter method");
//         return this.#name;
//     }
//     set name(newName){
//         console.log("Setter method");
//         this.#name = newName;
//     }
// }
// const p = new Person("Bob", 20);
// console.log(p.name);
// p.name = "Alice";
// console.log(p.name);

// abstraction
// interface (implements), abstract class (extends)
// class Person {
//     constructor(){
//         if(this.constructor === Person){
//             throw new Error("Abstract class 'Person' cannot be instantiated directly.");
//         }
//     }
//     intro(){
//         throw new Error("Method 'intro()' must be implemented.");
//     }
//     hello(){
//         console.log("Hello");
//     }
// }
// class Student extends Person{
//     intro(){
//         // super.intro();
//         console.log("I am a student.");
//     }
// }
// const s = new Student();
// s.intro();
// s.hello();
// const p = new Person(); // Error

// inhertitance
// class Person {
//     #name;
//     #age;
//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }
//     intro(){
//         console.log(`My name is ${this.#name} and I am ${this.#age} years old.`);
//     }
//     // getter and setter
//     get name(){
//         // console.log("Getter method");
//         return this.#name;
//     }
//     set name(newName){
//         console.log("Setter method");
//         this.#name = newName;
//     }
// }
// class Student extends Person{
//     constructor(name, age, year){
//         super(name, age);
//         this.year = year;
//     }
//     intro(){
//         console.log("My name is " + this.name + " and I am " + this.year + " student.");
//     }
//     register(course){
//         console.log(course + " registered.");
//     }
// }
// const s = new Student("Bob", 20, "freshman");
// s.intro();
// s.register("Math");
// const p = new Person("Alice", 22);
// p.intro();
// p.register("CS"); // Error

// polymorphism
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     intro(){
//         console.log("My name is " + this.name);
//     }
// }

// class Student extends Person{
//     constructor(name, major){
//         super(name);
//         this.major = major;
//     }
//     intro(){
//         console.log("My name is " + this.name + " and I am studying " + this.major);
//     }
// }

// class Professor extends Person{
//     constructor(name, subject){
//         super(name);
//         this.subject = subject;
//     }
//     intro(){
//         console.log("My name is " + this.name + " and I am a professor of " + this.subject);
//     }
// }

// const people = [
//     new Student("Alice", "Computer Science"),
//     new Student("Bob", "Mathematics"),
//     new Professor("Dr. Smith", "Physics"),
//     new Professor("Dr. Johnson", "Chemistry")
// ]
// people.forEach(person => person.intro());

// constructor function
function Person(){
    this.name = "Bob";
    this.age = 20;
    this.intro = function() {
        console.log("hello");
    }
}
const p = new Person();
const person1 = new Person();
p.name = "Alice";
// p.greet = function() {
//     console.log("Hi");
// }
Person.prototype.greet = function() {
    console.log("Hi");
}
console.log(p);
console.log(person1);
p.greet();
person1.greet();
console.log(p.name);
console.log(person1.name);