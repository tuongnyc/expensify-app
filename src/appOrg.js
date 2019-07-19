console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

// JSX - JavaScript XML - javascript extension! Not core JavaScript!
// JSX expression!  Can only have a single root element in JSX.
// the paranthesis are optional!!
// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"
const template = (
    <div>
        <h1>title: {app.title}</h1>
        {app.subtitle && <p>subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
    </div>
);

const userName = 'Tuong';
const userAge = 27;
const userLoc = 'New York City'

// JSX expression
const templateTwo = (
    // root element
    // using variable now!, using {}, making it dynamic
    // can use all of JavaScript function in the variable!
    <div>
        <h1>{userName.toUpperCase() + '!'}</h1>  
        <p>Age: {userAge}</p>
        <p>Location: {userLoc}</p>
    </div>
);

const user = {
    name: 'Ronald',
    age: 57,
    location: 'New York'
};

// creating a function! ES5 fucntion. return an JSX expression
function getLocation(location) {
    if(!location)
        return undefined;  // nothing is going to show up.
    else
        return <p>location: {location}</p>;  // return JSX expression
}

const templateThree = (
    // can not render an OBJECT!!!
    // must use the properties of the object. {} uses javascript expression!
    // call a function in JavaScript.
    // Ternary operator for the user.name!
    // undefined, true/false, null are ignored by JSX!!!
    // if user.age > 18, then print the age on the screen.
    // if < 18, it does not show up!
    <div>
        <h1>{(user.name) ? user.name : 'Anonymous' }</h1>  
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
);

// get the DOM element ID="app"
const appRoot = document.getElementById("app");


// first arg is JSX, second is the DOM element! 
// render to the screen!
ReactDOM.render(template, appRoot);
//ReactDOM.render(templateThree, appRoot);