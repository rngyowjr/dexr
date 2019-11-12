import React from 'react';
import { Link } from 'react-router-dom';
// import eevee from '../../../app/assets/images/eevee.png';

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                {/* <img src="{eevee}" alt="eevee"/> */}
                <div className="splash-content-container">
                    <h1 className="splash-title">PRAISE THE SUN \[T]/</h1>
                    <h2 className="splash-message">This is the greatest creation since sliced bread!</h2>
                    <Link to="/signup" className="splash-signup">Sign Up</Link>
                </div>
            </div>
        )
    }
}

export default Splash;