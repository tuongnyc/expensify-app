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

let count = 0;
const someId = 'myidhere';

const addOne = () => {
    console.log('addOne');
    count++;
    renderCounterApp();
};

const minusOne = () => {
    console.log('minusOne');
    count--;
    renderCounterApp();
}

const reset = () => {
    console.log('reset');
    count = 0;
    renderCounterApp();
}

// use div if there's more than 2 elements
// class will be className in JSX!
// <button id={someId} className="button">+1</button>
// can make arrow function inside the {}
/*        <button onClick={() => {
            console.log('some value here');
        }}>+1</button> */



// get the DOM element ID="app"
const appRoot = document.getElementById("app");

// first arg is JSX, second is the DOM element! 
// render to the screen!
//ReactDOM.render(templateTwo, appRoot);
//ReactDOM.render(templateThree, appRoot);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset </button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();