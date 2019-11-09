import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import FooterContainer from './footer/footer_container';
// import Eevee from '../../app/assets/images/eevee.png';

const App = () => (
    <div className="app">
        <header >
            <NavBarContainer />
        </header>
        <br/>
        <section className="section"> PRAISE THE SUN \[T]/
            <Switch>
                <Route path='/index' component={PhotoIndexContainer}/>
                <Route path="/signup" component={SignupFormContainer} />
                <Route path="/login" component={LoginFormContainer} />
            </Switch>
            {/* <img src={window.eevee} />  should be in a react component */}
        </section>
        <footer className="footer">
            <FooterContainer />
        </footer>
    </div>
);

export default App;