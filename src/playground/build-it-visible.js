const appRoot = document.getElementById("app");

let visibilityButton = 0;
const buttonValueShow = 'Show Detail';
const buttonValueHide = 'Hide Detail';
const detailText = 'Hey.  There are some details you can now see';

const onShowDetail = () => {
    if(visibilityButton == 1)
    {
        visibilityButton = 0;
    }
    else {
        visibilityButton = 1;
    }

    renderDOMFunction();
} 

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
            <h1>Visibility Toggke</h1>
            <button onClick={onShowDetail}>
            {
                (visibilityButton) ? 'Hide Detail' : 'Show Detail'
            }
            </button>
            {
                (visibilityButton == 1) ? <p>'Hey.  There are some details you can now see'</p> : ''
            }
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderDOMFunction();
