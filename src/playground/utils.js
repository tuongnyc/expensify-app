// create a function!
const square = (x) => x*x;

const add = (a,b) => a + b;

const subtract = (a, b) => a - b;

// two type of exports
// 1.  default export - named export {} is not an object!
export {
    // can only have 0 or 1 default export!! if more than one, get an error!
    square, add, subtract // as default
};

// second type of export!  Inline export!
export const squares = (x) => x*x;
export const adds = (a,b) => a + b;

const subtracts = (a, b) => a - b;
export default subtracts;  // must be after the function.

// export default (a, b) => a - b;  // note there is no function name!
