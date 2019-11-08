import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign up!</Link>
        </nav>
    );
    const personalNavBar = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Heya {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        <div className="global-nav">
            <h1>PRAISE THE SUN \[T]/</h1>
            <div className="nav-logo">Logo</div>
            {currentUser ? personalNavBar() : sessionLinks()}
        </div>
    )
};


export default NavBar;

// devicePixelRatio
// PokeSnapr
