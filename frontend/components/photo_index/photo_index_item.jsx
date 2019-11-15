import React from 'react';

class PhotoIndexItem extends React.Component {

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                        <br />
                        <br />
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { photo, deletePhoto } = this.props;
        
        return (
            <li className="index-item">
                <p className="index-item-title">{photo.title}</p>
                <div className="index-item-photo-container">
                    <img className="index-item-photo" src={photo.img_url} alt={photo.title}/>
                </div>
                <div className="index-item-errors">
                    {this.renderErrors()}
                </div>
                <div className="index-item-delete-container">
                    <button className="index-item-delete" onClick={() => deletePhoto(photo.id)}>Delete</button>
                </div>
            </li>
        )
    };
};

export default PhotoIndexItem;