import React from 'react';
import { connect } from 'react-redux';  // use to check user authentication
import { Route, Redirect } from 'react-router-dom';

// stateless functional component
// ...rest will get the rest of the variables that has not been destructure!
export const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route {...rest} component={(props)=> (
        isAuthenticated ? (
                            <Redirect to="/dashboard" />
                          ) : (
            <Component {...props} />
        )
    )}/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid  // turn it to boolean with !!
});

export default connect(mapStateToProps)(PublicRoute);