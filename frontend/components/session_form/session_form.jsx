import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push(`/`));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        console.log(this.props.history)
        return (
            <div className="login-content-container">
                <form onSubmit={this.handleSubmit} className="login-form-container">
                    <img className="login-icon" src={window.images.loginicon} />
                    <h1 className="login-title">Please {this.props.formType} to dexr</h1>
                    <div className="session-errors">
                        {this.renderErrors()}
                    </div>
                    <div className="login-form">
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="username-input"
                            placeholder="Username"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="password-input"
                            placeholder="Password"
                        />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <div className="login-pillow"></div>
                    </div>
                    <div className="session-alt-container">
                        <p className="session-alt-text">
                            {this.props.formType === "Sign Up" ? "Not a Dexr member?" : "Already a Dexr member?"}
                        </p>
                        <div className="session-alt-link"> {this.props.navLink} </div>
                    </div> 
                </form>
            </div>
        );
    }
}

export default SessionForm;

