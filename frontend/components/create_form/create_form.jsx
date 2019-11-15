import React from 'react';
import { Link } from 'react-router-dom';

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img_url: '',
            author_id: this.props.authorId
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
        const photo = Object.assign({}, this.state);
        this.props.createPhoto(photo)
            .then(() => this.props.history.push(`/`));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                        <br/>
                        <br/>
                    </li>
                ))}
            </ul>
        );
    }
    
    render() {
        return (
            <div className="create-content-container">
                <form className="create-form-container" onSubmit={this.handleSubmit}>
                    <img className="create-icon" src={window.images.loginicon} />
                    <div className="create-errors">
                        {this.renderErrors()}
                    </div>
                    <div className="create-form">
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            className="title-input"
                            placeholder="Title"
                        />
                        <input type="text"
                            value={this.state.img_url}
                            onChange={this.update('img_url')}
                            className="img_url-input"
                            placeholder="Image Url"
                        />
                        <input className="create-submit" type="submit" value="Add Photo" />
                    </div>
                    <div className="create-pillow"></div>
                    <div className="create-return-container">
                        <Link to="/" className="create-return"> Return to Index. </Link>
                    </div>
                </form>
            </div>

        )
    }
}

export default CreateForm;

