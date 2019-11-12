import React from 'react';

class PhotoIndex extends React.Component {
    render () {
        return (
            <div>
                <div className="index-pic">
                    <h1>this is the index</h1>

                    <img className="dex" src={window.images.pokedex} alt="test"/>
                </div>



            </div> 

        )
    }
}

export default PhotoIndex;