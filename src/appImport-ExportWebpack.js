// import utils.js for our app, using webpack!  Currently running a file.
//import './utils.js';  // each one maintain local scope!  
//Does not mean we have access to anything in the util.js

// default export are outside of the curly braces! 
// the default export can be named anything.  It doesn't have to match.  
// the naming is not important.  But named export must match!
import subract, { squares , adds } from './utils.js';   // import a specific thing that export from file.!
// function!  Doesn't need to grab all the export file!
// name export/import must match!

import isSenior, { isAdult, canDrink } from './person.js';

console.log('app.js is running haha!!!');
console.log(squares(4));
console.log(adds(2,4));
console.log(subract(5,3));

console.log(isAdult(21));
console.log(canDrink(44));
console.log(isSenior(49));