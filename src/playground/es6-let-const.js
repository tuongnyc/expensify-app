var nameVar = 'Tuong';
var nameVar = 'Nguyen';  // var can let you redefine!!
console.log('nameVar', nameVar);

let nameLet = 'Thu';
nameLet = 'Jessie';  // can not redefine it!!  ES6!  Can only reassign
console.log('nameLet', nameLet);

const nameConst = 'Frank';  // can not redefine or reassign!
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
// Block scoping.  For, if, or function!

var fullName = 'Tuong Nguyen';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// note var is function scope!, while let, const are block scope, which include function scope.
// so you will have access to the firstName outside of the if, for statement!
console.log(firstName);