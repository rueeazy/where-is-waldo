import React, { useState } from 'react';
import Picture from '../components/Picture';
import InfoPanel from '../components/InfoPanel';

const Home = () => {
    const [xPos, setXPos] = useState("")
    const [yPos, setYPos] = useState("")
    const [targetStatus, setTargetStatus] = useState(false)
    const [selectionWindowX, setSelectionWindowX] = useState("")
    const [selectionWindowY, setSelectionWindowY] = useState("")
    const [charactersFound, setCharactersFound] = useState(0)

    //Get X and Y Coords of area clicked
    const getClickPosition = (e) => {
        console.log("x: " + e.nativeEvent.offsetX)
        console.log("y: " + e.nativeEvent.offsetY)
        setXPos(e.nativeEvent.offsetX)
        setYPos(e.nativeEvent.offsetY)
        generateSelectionWindow(e.nativeEvent.pageX, e.nativeEvent.pageY);
    }

    //Add little window to display
    const generateSelectionWindow = (x, y) => {
        setSelectionWindowX(x)
        setSelectionWindowY(y)
        setTargetStatus(!targetStatus)
    }

    //If Character found, add score
    const incrementScore = () => {
        setCharactersFound(charactersFound + 1)
    }

    return (
        <div className="home">
            <InfoPanel /> 
            <div className="main-content">
                <Picture 
                    onClick={getClickPosition}
                    targetStatus={targetStatus}
                    selectionWindowX={selectionWindowX}
                    selectionWindowY={selectionWindowY}
                    xPos={xPos}
                    yPos={yPos}
                    incrementScore={incrementScore}
                /> 
            </div>
        </div>
    )
}

export default Home