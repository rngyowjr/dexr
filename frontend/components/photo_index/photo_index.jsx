import React from 'react';

class PhotoIndex extends React.Component {
    render () {
        return (
            <div className="index-container">
                <h1>this is the index</h1>
                <div className="index-pic">

                    <img className="dex" src={window.images.eevee} alt="test"/>
                </div>



            </div> 

        )
    }
}

export default PhotoIndex;