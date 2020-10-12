import React, { useState, useEffect } from 'react';
import Picture from '../components/Picture';
import InfoPanel from '../components/InfoPanel';

const Home = () => {
    const [characters, setCharacters] = useState([])
    const [xPos, setXPos] = useState("")
    const [yPos, setYPos] = useState("")
    const [targetStatus, setTargetStatus] = useState(false)
    const [selectionWindowX, setSelectionWindowX] = useState("")
    const [selectionWindowY, setSelectionWindowY] = useState("")
    const [charactersFound, setCharactersFound] = useState(0)

    //fetch all character data from backend on mount
    useEffect(() => {
        const url = "/api/v1/characters/index"   
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => setCharacters(data))
        .catch(error => console.log(error.message))

    }, [])
    
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

    const markCharacterFound = (index) => {
        let newArr = [...characters]
        newArr[index].found = true
        setCharacters(newArr)
    }

    return (
        <div className="home">
            <InfoPanel
            characters={characters}
             /> 
            <div className="main-content">
                <Picture 
                    onClick={getClickPosition}
                    targetStatus={targetStatus}
                    selectionWindowX={selectionWindowX}
                    selectionWindowY={selectionWindowY}
                    xPos={xPos}
                    yPos={yPos}
                    incrementScore={incrementScore}
                    markCharacterFound={markCharacterFound}
                /> 
            </div>
        </div>
    )
}

export default Home