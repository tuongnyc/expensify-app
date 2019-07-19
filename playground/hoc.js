// HOC - high order component - a component (HOC) that renders another component(regular component)
// Reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p> The info is: {props.info} </p>
    </div>
)

// accepting a regular component
const withAdminWarning = (WrappedComponent) => {
    // return the high order component
    // pass the props in the WrappedComponent using the spread operator.  Passing it
    // down to child!
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info.  Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

// HOC!  New component!
const AdminInfo = withAdminWarning(Info);

// requireAuthentication, return a new stateless component!
// regular function that return a high order component!
const requireAuthentication = (WrappedComponent) => {
    /*return (props) => (
        <div>
        {!props.isAuthenticated && <p>Please Login!</p>}
        <WrappedComponent {...props} />
        </div>
    ); */
    return (props) => (
        props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <p> Please login to view the info. </p>
        )
    )
}

const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));