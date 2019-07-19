import React from 'react';
import {  NavLink } from 'react-router-dom';

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

const Header = () => (
    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;