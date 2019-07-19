// component state!
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);  //bind to the current component instance!
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: props.count
        };
    }

    componentDidMount() {
        const countStr = localStorage.getItem('count');
        const intCount = parseInt(countStr);

        if(!isNaN(intCount))
            this.setState(() => ({count: intCount}));
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count',this.state.count)
        }
    }

    handleAddOne() {
        //this.state.count++;
        this.setState((prevState) => {  // will refreshing the component!!
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne() {
        // only provide the state that changed!!!
        // setState require a function and return a new object
        // with the state that changed!
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        // don't need prevState!
        this.setState(() => {
            return {
                count: 0  // reset counter back to zero!
            }
        })

        // this is older version! DON'T USE!
        // this.setState is asyncrhonous!!  So, the second
        // setState, the count hasn't changed yet!
        /*this.setState({
            count: 0
        });
        this.setState({
            count: this.state.count + 1
        })*/
    }

    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// setting up default, if not passed in the parameter!
Counter.defaultProps = {
    count: 0
}


// create 3 methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// wire up onClick & bind in the constructor
// bypassing the Counter.defaultProps, by setting the count = 2
//ReactDOM.render(<Counter count={2}/>, document.getElementById('app'));
// using the default Counter.defaultProps, setting count = 0;
ReactDOM.render(<Counter />, document.getElementById('app'));