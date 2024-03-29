import React from 'react';
import {  NavLink, Link } from 'react-router-dom';
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
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link className="header__title" to="/dashboard"  >
            <h1>Expensify</h1>
            </Link>
            <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
    </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);