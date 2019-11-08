import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const anonymousNav = () => (
        <nav className="nav-tools">
            <form className="nav-search-bar">
                <i class="fas fa-search"></i>
                <div className="nav-search-pillow"></div>
                <input 
                    type="text"
                    class="nav-search-input"
                    placeholder="Photos, people, or groups"
                />
            </form>
            <div className="login-container">
                <Link to="/login" className="nav-login">Log in</Link>
            </div>
            <div className="signup-container">
                <Link to="/signup" className="nav-signup">Sign Up</Link>
            </div>
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
        <div className="header-nav">
            <div className="nav-logo-container">
                <div className="nav-logo">dexr</div>
            </div>
            {currentUser ? personalNav() : anonymousNav()}
        </div>
    )
};

export default NavBar;
