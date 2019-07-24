import React from 'react';
import {  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

// making header to show up in every page!
// NavLink is better if there are multiple links side by side
/*
const Header = () => (
    <header>
    <h1>Expensify</h1>
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create Expense</Link>
    <Link to="/Edit">Edit Expense</Link>
    <Link to="/help">Help</Link>
    </header>
); */

export const Header = ({startLogout}) => (
    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" >Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);