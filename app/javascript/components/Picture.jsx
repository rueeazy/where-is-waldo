import React from 'react';
import waldo from 'images/waldo.jpg';

const Picture = (props) => {
    return (
        <div className="picture">
            <img src={waldo} alt="waldo-image" className="main-image"></img>
        </div>
    )
}

export default Picture