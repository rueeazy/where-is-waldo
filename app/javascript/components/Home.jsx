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
    const [stopGame, setStopGame] = useState(false)
    const [time, setTime] = useState(0)

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

    //Check for win
    useEffect(() => {
        if(charactersFound === 4) {
            setStopGame(!stopGame)
            let name = prompt("Enter your name for leaderboard")
            writeApiData(name, time);
        }
    }, [charactersFound])

    //Get X and Y Coords of area clicked
    const getClickPosition = (e) => {
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
        setCharactersFound(charactersFound => charactersFound + 1)
    }

    const getTime = (seconds) => {
        setTime(seconds)
    }

    // Write API Data
    const writeApiData = (name, time) => {
        if(name.length == 0 || time.length == 0) {
            return
        }

        const body = {
            name,
            time,
        }

        const token = document.querySelector('meta[name="csrf-token"]').content;
        let url = '/api/v1/players/create'
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            return response.json()
        })
        .then(data => {console.log(data)})
        .catch(error => error.message)
    }


    return (
        <div className="home">
            <InfoPanel
            characters={characters}
            stopGame={stopGame}
            getTime={getTime}
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