'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional component!!


// parent component!
var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        return _this;
    }

    // only in class based component!  Lifecycle method.
    // invoke only when component mounted.


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                // get the options back from local storage!
                var options = JSON.parse(json);

                // set the state!
                if (options) this.setState(function () {
                    return { options: options };
                });

                // localStorage.clear()  will clear all the local
                // storage!
            } catch (error) {
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

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            // save the data!
            // if the previous state is not the same, then save the data
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json); // save in the localStorage only when data changes.
            }
        }

        // when component go away, barely use!
        // ie. individual options that remove away!

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }

        //handleDeleteOptions - function can pass down to children as props.

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });

            // alternatively
            // note arrow function with one line, no need to use keyword
            // return, because it is implicit.  Returning an object,
            // must be surrounded by ().  If {} alone, arrow function
            // treat it as a function body!
            //this.setState(() => ({options:[]}));
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (op) {
                        return op !== option;
                    }) };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            console.log(this.state.options);
            // randomly pick and option!
            var length = this.state.options.length;

            if (length > 0) {
                var randomNum = Math.floor(Math.random() * length);
                var option = this.state.options[randomNum];
                console.log(option);
            }
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) >= 0) {
                // already exxist
                return 'This option already exist';
            }

            this.setState(function (prevState) {
                // never change the prevState!!
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer';

            // options is passed in as parameter!.
            // rendering the child component!
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

// setting the default value for the props.  Must be after the 
// component!
Header.defaultProps = {
    title: 'Indecision'
};

// stateless functional component!
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: props.asOptions,
                onClick: props.handlePick },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All '
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),

        // render a new <p> tag for each option!
        props.options.map(function (option) {
            return React.createElement(Option, { key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        }),
        React.createElement(Option, null)
    );
};

var Option = function Option(props) {
    if (props.optionText) {
        return React.createElement(
            'div',
            null,
            props.optionText,
            React.createElement(
                'button',
                { onClick: function onClick() {
                        props.handleDeleteOption(props.optionText);
                    } },
                'Remove'
            )
        );
    } else return React.createElement('div', null);
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    // set up a method!


    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(event) {
            event.preventDefault(); // stop the full page refresh!!

            // event.target is the form!
            var option = event.target.elements.option.value.trim();
            // list of elements by name, so pull the named option value

            var error = this.props.handleAddOption(option); // call the parent!

            /*this.setState(() => {
                return {
                    error: error  // ES6, with same name we can shortcut error => error: error
                }
            })*/

            this.setState(function () {
                return { error: error };
            });
            // clearing the input text box!

            //if there is an error, do not clear out input!
            if (!error) event.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', id: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
