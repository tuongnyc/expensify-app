console.log('destructuring');

const person = {
    name: 'Tuong',
    age: 27,
    location: {
        city: 'NYC',
        temp: 92
    }
};

console.log(`${person.name} is ${person.age}`)

// object destructuring to let break the object apart!
// the variable must match with the person property!
// setting the default value anonymous if name doesn't exist!
const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`)

/*const {city, temp} = person.location;

console.log(`${city} is ${temp}`) */

// renaming syntax
//const { city, temp: temperature } = person.locaion;
//console.log(`${city} is ${temperature}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Publish'} = book.publisher;

console.log(`${publisherName}`)

// Array Destructuring!

const address = ['111 S. Clifton', 'Wichita', 'KS', '67210']
console.log(`You are in ${address[1]} ${address[2]}.`)

/// destructuring the array.
// for object, we use {}, for array [], with object, it match by name,
// array it match by position!
const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);

// you don't need to destructure all of them
const [street1, city1, state1 ] = address;
const [, , state2] = address;  // just getting the state
console.log(`You are in ${state2}`)

const address2 = [];
const [, , state3 = 'New York'] = address2;
console.log(`${state3}`);

console.log(address2);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [CoffeeName, , medium] = item;
console.log(`A medium ${CoffeeName} costs ${medium}`);
const [CoffeeName2 = 'Coffee (iced)', , medium2] = item;
console.log(`A medium ${CoffeeName2} costs ${medium2}`);