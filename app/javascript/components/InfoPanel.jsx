import React from 'react';
import Timer from './Timer';
import Character from './Character';

const InfoPanel = (props) => {
    return (
        <div className="info-panel">
            <Timer
            stopGame={props.stopGame}
            getTime={props.getTime} />
            <div className="names-container">
            {props.characters.map(character => {
                return <Character
                        key={character.id}
                        name={character.name} 
                        found={character.found}
                        />
            })}
            </div>
        </div>
    )
}

export default InfoPanel