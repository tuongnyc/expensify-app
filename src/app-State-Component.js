// React Component is just ES6 classes, Compoent is a class itself

// component props.  Similar to HTML id.  using key=value pair
// through reactJS.

/*
const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind(obj);   // reference to getName function.  
//Now you lost the this pointer!!
// now the bind() will bind to the getName method!
// passing the obj will bind to the this pointer!
const getName2 = obj.getName.bind({name: 'Tuong'})

// mdn bind
*/

// parent component!
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ['first', 'second', 'third']
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    //handleDeleteOptions - function can pass down to children as props.
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        })
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
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        // options is passed in as parameter!.
        // rendering the child component!
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}/>
                <AddOption 
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

class Header extends React.Component {
    render(){  // must define render, because it is abstract
        // return an JSX
        // access to this
        // access the key value pair this.props.key
        console.log(this.props);
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
            <button disabled={this.props.asOptions} 
                onClick={this.props.handlePick}>
                What should I do?
            </button>
            </div>
        )
    }
}


class Options extends React.Component {
    /*constructor(props) {
        super(props);   // this allow to access to this.props
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }*/

    render() {
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All </button>
            {
                // render a new <p> tag for each option!
                this.props.options.map((option) => {
                    return <Option key={option} optionText={option} />
                })
            }
            <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
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
        
        this.setState(() => {
            return {
                error: error  // ES6, with same name we can shortcut error => error: error
            }
        })
        // clearing the input text box!
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

// inline!
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));