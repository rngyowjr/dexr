import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import MainPage from './main_page/main_page_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import FooterContainer from './footer/footer_container';

// import Eevee from '../../app/assets/images/eevee.png';

const App = () => (
    <div className="app">
        <header className="header">
            <NavBarContainer />
        </header>
        <section className="section">
            <Switch>
                <Route path="/signup" component={SignupFormContainer} />
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/" component={MainPage} />
            </Switch>
            {/* <img src={window.eevee} />  should be in a react component */}
        </section>
        <footer className="footer">
            <FooterContainer />
        </footer>
    </div>
);

export default App;