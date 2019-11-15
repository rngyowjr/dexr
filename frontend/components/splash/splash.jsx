import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-content-container">
                <h1 className="splash-title">WELCOME TO DEXR :)</h1>
                <h2 className="splash-message">This is the greatest creation since sliced bread!</h2>
                <Link to="/signup" className="splash-signup">Sign Up</Link>
            </div>
        )
    }
}

export default Splash;