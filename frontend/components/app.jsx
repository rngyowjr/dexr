import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import NavBarContainer from './navbar/navbar_container';
import MainPage from './main_page/main_page_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import CreateFormContainer from './create_form/create_form_container';

const App = () => (
    <div className="app">
        <header className="header">
            <NavBarContainer />
        </header>
        <section className="section">
            <Switch>
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/create" component={CreateFormContainer} />
                <Route path="/" component={MainPage} />
            </Switch>
        </section>
    </div>
);

export default App;