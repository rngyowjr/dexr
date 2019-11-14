import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
    errors: errors.sessionErrors,
    formType: 'Sign Up',
    navLink: <Link to="/login" className="session-alt-link"> Log in here.  </Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    processDemo: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);

