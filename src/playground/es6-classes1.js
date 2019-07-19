// classes, 

class Person {
    // constructor function!, called when an instance created.
    // function defaults!
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;  // introduce name property to class Person!
        this.age = age;
    }

    // function! method, ES6 method have access to this pointer!
    getGreeting() {
        //return 'Hello, I am ' + this.name + '!';
        // ES 6 template string, ``
        return `Hello, I am ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years(s)old.`;
    }
}

// student is a subclass
class Student extends Person {
    // override the constructor!
    constructor(name, age, major = 'Undecided') {
        // call the parent constructor!
        super(name,age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description = description + `  Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greetings = super.getGreeting();

        if(this.hasHomeLocation()) {
            greetings += `  I'm visiting from ${this.homeLocation}.`    
        }

        return greetings;
    }
}

const me = new Student('Tuong Nguyen', 41, 'Computer Science');  // create an instance!
const other = new Student();

console.log(me.hasMajor());
console.log(other);
console.log(other.getGreeting());
console.log(me.getDescription());

const traveler1 = new Traveler('Tuong Nguyen', 41, 'New York City');
console.log(traveler1.getGreeting());

const traveler2 = new Traveler();
console.log(traveler2.getGreeting());