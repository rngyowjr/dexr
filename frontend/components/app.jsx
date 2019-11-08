import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import FooterContainer from './footer/footer_container';

const App = () => (
    <div class="app">
        <header >
            <NavBarContainer />
        </header>
        <br/>
        <section class="section"> PRAISE THE SUN \[T]/
            <Switch>
                <Route path='/index' component={PhotoIndexContainer}/>
                <Route path="/signup" component={SignupFormContainer} />
                <Route path="/login" component={LoginFormContainer} />
            </Switch>
        </section>
        <footer class="footer">
            <FooterContainer />
        </footer>
    </div>
);

export default App;