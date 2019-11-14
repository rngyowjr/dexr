import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.sessionErrors,
    formType: 'Log In',
    navLink: <Link to="/signup" className="session-alt-link"
    > Sign up here. </Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    processDemo: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);

