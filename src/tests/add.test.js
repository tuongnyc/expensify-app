// require .test.js file
const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`

// set up a new test! Always string first arg, and arrow function in second
test('should add two numbers', () => {
    const result = add(2,4);

    /*
    // an assertion!
    if(result !== 6) {
        throw new Error(`You added 4 and 2.  The result was ${result}.  Expect 6.`)
    }*/

    expect(result).toBe(6);
});

test('should generate greeting', () => {
    expect(generateGreeting('Mike')).toBe('Hello Mike!');
})