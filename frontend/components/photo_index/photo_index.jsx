import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPhotos();
    }
    
    render () {
        const { photos, deletePhoto, errors } = this.props;

        return (
            <div className="index-content-container">
                <h1 className="index-welcome">Welcome to dexr {this.props.currentUser.username}!</h1>
                
                <div className="index-photos-container">
                    <ul className="index-photos-list">
                        {
                            photos.map(photo => <PhotoIndexItem key={photo.id} photo={photo} deletePhoto={deletePhoto} errors={errors} />)
                        }
                    </ul>
                </div>
            </div> 

        )
    }
}

export default PhotoIndex;

