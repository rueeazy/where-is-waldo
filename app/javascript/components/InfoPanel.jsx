import React from 'react';
import Timer from './Timer';
import Character from './Character';

const InfoPanel = (props) => {
    return (
        <div className="info-panel">
            <Timer />
            <div className="names-container">
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
            </div>
        </div>
    )
}

export default InfoPanel