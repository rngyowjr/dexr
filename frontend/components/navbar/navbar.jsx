import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const anonymousNav = () => (
        <nav className="nav-entry-tools">
            <div className="nav-search-bar-container">
                <div className="nav-search-bar">
                    <i className="fas fa-search"></i>
                    <div className="nav-search-pillow"></div>
                    <input 
                        type="text"
                        className="nav-search-input"
                        placeholder="Photos, people, or groups"
                    />
                </div>
            </div>
            <div className="nav-entry-container">
                <Link to="/login" className="nav-login">Log In</Link>
                <div className="signup-container">
                    <Link to="/signup" className="nav-signup">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
    const personalNav = () => (
        <nav className="nav-exit-tools">
            <div className="nav-entry-container">
                <h2 className="nav-greeting">Heya {currentUser.username}!</h2>
                <div className="nav-logout-container">
                    <button className="nav-logout" onClick={logout}>Log Out</button>
                </div>
            </div>
        </nav>
    );

    return (
        <div className="header-nav">
            <div className="nav-logo-container">
                <Link to="/" className="nav-logo">dexr</Link>
            </div>
            {currentUser ? personalNav() : anonymousNav()}
        </div>
    )
};

export default NavBar;
