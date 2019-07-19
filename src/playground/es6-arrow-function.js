const square = function (x) {
    return x*x;
}

function square2(x) {
    return x*x;
}

console.log(square(2));

// ES6 always anonymous!
const squareArrow = (x) => {
    return x*x;
}

console.log(squareArrow(6));

// if the arrow function just return single value, then don't use return!
// implicit return!
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(5));

// ES6 function.
const getFirstNameShortHand = (fullName) => fullName.split(' ')[0];

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstNameShortHand('Tuong Nguyen'));

console.log(getFirstName('Ronald NGuyen'));