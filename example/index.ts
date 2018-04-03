// ------------------------------------------------
// Base Example of Making Interfaces (Structs):
// ------------------------------------------------
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName;
}

let firstUser = "Jane User";

let person = {
    firstName: 'John',
    lastName: 'Smith'
}

greeter(person);
// ------------------------------------------------
// Example Using ES6 Classes:
// ------------------------------------------------
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeterTwo(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

greeterTwo(user);