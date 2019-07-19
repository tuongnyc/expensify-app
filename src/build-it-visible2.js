// create a component VisibilityToggle 
// 1) constructor
// 2) render
// 3) handleToggleVisibility
// 4) visibility -> false/true

class VisibilityToggle extends React.Component  {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false
        }

        // bind the handle funciton
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide Detail' : 'Show Detail'}
                </button>
                <p>
                {
                    this.state.visibility && 'Hey. There are some details you can now see!'
                }
                </p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));