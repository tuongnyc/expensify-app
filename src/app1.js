console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const removeAll = () => {
    app.options = [];

    renderDOMFunction();
}

const onMakeDecision = () => {
    // generate a random number!
    const length = app.options.length;
    if(length > 0) {
        const randomNum = Math.floor(Math.random() * length);
        const option = app.options[randomNum];
        alert(option);
    }
}

const onFormSubmit = (event) => {
    event.preventDefault();  // stop the full page refresh!!
    
    const option = event.target.elements.option.value  
    // list of elements by name, so pull the named option value

    if(option) {
        app.options.push(option);
    }

    // clearing the input text box!
    event.target.elements.option.value = '';
    renderDOMFunction();
}

const appRoot = document.getElementById("app");


const renderDOMFunction = () => {
    // JSX - JavaScript XML - javascript extension! Not core JavaScript!
    // JSX expression!  Can only have a single root element in JSX.
    // the paranthesis are optional!!
    // only render the subtitle (and p tag) if subtitle exist - logical and operator
    // render new p tag - if options.length > 0 "Here are your options" "No options"
    // envent handler for form, do not call onFormSubmit, just reference 
    // the function onFormSubmit!
    const template = (
        <div>
            <h1>title: {app.title}</h1>
            {app.subtitle && <p>subtitle: {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
            <button disabled={app.options.length > 0 ? false: true} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                // map over app.options getting back an array of list
                // set key and text
                app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" id="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderDOMFunction();
