import React from 'react';
import PhotoIndexContainer from '../photo_index/photo_index_container';
import SplashContainer from '../splash/splash_container';
import FooterContainer from '../footer/footer_container';

const MainPage = ({ currentUser }) => {

    const index = () => (
        <div className="index-container">
            <PhotoIndexContainer />
        </div>
    );

    const splash = () => (
        <div className="test">
            <div className="splash-container">
                <div className="splash-image-container"></div>
                <SplashContainer />
                <FooterContainer />
            </div>
        </div>
    );

    return(
        <div className="main-page">
            {currentUser ? index() : splash()}
        </div>
    );
}

export default MainPage;