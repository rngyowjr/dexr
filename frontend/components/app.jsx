import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';

const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <br/>
        <br/>
        <Switch>
            <Route path='/index' component={PhotoIndexContainer}/>
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/login" component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;