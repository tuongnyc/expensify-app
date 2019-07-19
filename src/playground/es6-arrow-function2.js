// arguments object - no long bound with arrow functions.
const add = function(a,b) {  //ES5 function!
    console.log(arguments);  
    return a + b;
}

console.log(add(55,1, 10001));

const add2 = (a,b) => {
    //console.log(arguments);  -- no longer can be able to use arguments object!
    return a + b;
}

// this keyword - no longer bound with arrow function!

const user = {
    name: 'Tuong',
    cities: ['NYC', 'Wichita', 'overland park'],
    // the method can not be arrow function!!!  No this bind to the object.
    // must use ES5 function!
    printPlacesLived: function () { //ES 5 function as a method!
        // the this keyword is available, bind to this object.
        console.log(this.name);
        console.log(this.cities);

        // note the function anonymous is not accessible to the this keyword!!
        // to correct, assign this to another object
        const that = this;
        this.cities.forEach(function(city) {
            // error below: not accessible to this in (this.name);
            //console.log(this.name + ' has lived in ' + city);
            console.log(that.name + ' has lived in ' + city);
        } );

        // switch to arrow function! the this will work!
        this.cities.forEach((city) => {
            // the arrow function now works!
            console.log(this.name + ' has lived in ' + city);
        } );
    },

    // ES 6 method!!
    printPlacesLived2() {  // this will access to the this object!
        // the this keyword is available, bind to this object.
        console.log(this.name);
        console.log(this.cities);

        // note the function anonymous is not accessible to the this keyword!!
        // to correct, assign this to another object
        const that = this;
        this.cities.forEach(function(city) {
            // error below: not accessible to this in (this.name);
            //console.log(this.name + ' has lived in ' + city);
            console.log(that.name + ' has lived in ' + city);
        } );

        // function will call each item in the array!  Getting a new array back
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        //return cityMessages;
    }
};

user.printPlacesLived();
console.log(user.printPlacesLived2());

const multiplier = {
    numbers: [3, 4, 5, 7],
    multiplyBy: 3,
    multiply: function() {  // ES5
        return this.numbers.map((number) => this.multiplyBy * number);
    },

    multiply2() {  //ES 6
        // implicit return with one liner arrow function!
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());