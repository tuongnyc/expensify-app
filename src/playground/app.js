// stateless functional component!!


// parent component!
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: props.options
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    // only in class based component!  Lifecycle method.
    // invoke only when component mounted.
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            // get the options back from local storage!
            const options = JSON.parse(json);

            // set the state!
            if(options)
                this.setState(() => ({options: options})) ;

            // localStorage.clear()  will clear all the local
            // storage!
        } catch(error) {
            // if JSON is invalid, don't do anything!
        }

    }

    // lifecycle method will invoke when the component get updated!
    // options array updated!  Only when props or state changes!
    // when figuring when the data changes.!
    // prevProps - previous props
    // prevState
    // arguments are optional!
    // invoke after render function!
    componentDidUpdate(prevProps, prevState) {
        // save the data!
        // if the previous state is not the same, then save the data
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);  // save in the localStorage only when data changes.
        } 
    }

    // when component go away, barely use!
    // ie. individual options that remove away!
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    //handleDeleteOptions - function can pass down to children as props.
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        })

        // alternatively
        // note arrow function with one line, no need to use keyword
        // return, because it is implicit.  Returning an object,
        // must be surrounded by ().  If {} alone, arrow function
        // treat it as a function body!
        //this.setState(() => ({options:[]}));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((op) => op !== option)}))
    }   

    handlePick() {
        console.log(this.state.options);
        // randomly pick and option!
       const length = this.state.options.length;

        if(length > 0) {
            const randomNum = Math.floor(Math.random() * length);
            const option = this.state.options[randomNum];
            console.log(option);
        } 
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) >= 0){ // already exxist
            return 'This option already exist'
        }

        this.setState((prevState) => {
            // never change the prevState!!
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        // options is passed in as parameter!.
        // rendering the child component!
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

// setting the default value for the props.  Must be after the 
// component!
Header.defaultProps = {
    title: 'Indecision'
};

// stateless functional component!
const Action = (props) => {
    return (
        <div>
        <button disabled={props.asOptions} 
            onClick={props.handlePick}>
            What should I do?
        </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All </button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            // render a new <p> tag for each option!
            props.options.map((option) => {
                return <Option key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                        />
            })
        }
        <Option />
        </div>
    );
}


const Option = (props) => {
    if(props.optionText) {
        return (
            <div>
                {props.optionText}
                <button onClick={() => {
                    props.handleDeleteOption(props.optionText);
                }}>Remove</button>
            </div>
        )  
    }
    else
    return (
        <div></div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    // set up a method!
    handleAddOption(event) {
        event.preventDefault();  // stop the full page refresh!!
            
        // event.target is the form!
        const option = event.target.elements.option.value.trim();
        // list of elements by name, so pull the named option value
        
        const error = this.props.handleAddOption(option);  // call the parent!
        
        /*this.setState(() => {
            return {
                error: error  // ES6, with same name we can shortcut error => error: error
            }
        })*/

        this.setState(() => ({error: error}));
        // clearing the input text box!

        //if there is an error, do not clear out input!
        if(!error)
            event.target.elements.option.value = ''; 
    } 

    render() {
        return (
            <div>
            {
                this.state.error && <p>{this.state.error}</p>
            }
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" id="option"></input>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// now invoke the header <Header /> !!  Case sensitive!
// Allow React to figure out whether it is a component or HTML!
/*const jsx = (
    <div>
        <Header></Header>  
        <Action />   
        <Options />
        <AddOption /> 
    </div>
); */

//ReactDOM.render(jsx, document.getElementById('app'));

// stateless component are just function!!  Similar to class based
// component, it needs to return JSX!, doesn't get access to this
// the function accept the props argument!  Stateless are much faster!
/*const User = (props) => {
    return (
        <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        </div>
    );
}*/

// inline!
//ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));