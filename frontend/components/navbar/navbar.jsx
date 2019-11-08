import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const anonymousNav = () => (
        <nav className="nav-tools">
            <Link to="/login" className="nav-login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup" className="nav-signup">Sign up!</Link>
        </nav>
    );
    const personalNav = () => {
        return(
        <hgroup className="header-group">
            <h2 className="header-name">Heya {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
        )
    };

    return (
        <div className="global-nav">
            <div className="nav-logo">dexr</div>
            {currentUser ? personalNav() : anonymousNav()}
        </div>
    )
};

export default NavBar;
