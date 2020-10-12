import React, {useEffect, useState} from 'react';
import waldo from 'images/find-waldo.jpg';
import WindowBox from './WindowBox';

const Picture = (props) => {
    const [selectionGuess, setSelectionGuess] = useState("")
    const [characterApiData, setCharacterApiData] = useState("")
    const [charactersFound, setCharactersFound] = useState(0)
    const [foundWindows, setFoundWindows] = useState([])

    //Log Character Guess Selection
    const handleChange = (e) => {
        setSelectionGuess(parseInt(e.target.value))
        getApiCoors(parseInt(e.target.value))
    }

    //Get Character Guess Selection Coors
    const getApiCoors = (id) => {
        let url = `/api/v1/characters/show/${id}`
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => setCharacterApiData(data))
        .catch(error => console.log(error.message))
    }

    useEffect(() => {
        checkMatch()
    },[characterApiData])

    //Compare Api Coors to clicked Coors
    const checkMatch = () => {
        let charX = characterApiData.xCoor
        let charY = characterApiData.yCoor
        let guessX = props.xPos
        let guessY = props.yPos
        if(confirmationBoolean(charX, charY, guessX, guessY)) {
            ////// HERE IS WHERE WE RUN PROPS FUNCTION TO CHANGE CHARACTER STATE COUNT AND LEAVE WINDOW
            console.log("Yay!")
            setCharactersFound(charactersFound + 1)
            addFoundWindow();
            props.markCharacterFound(characterApiData.id - 1);
        }
        else console.log("damn")
        //Remove window/selection box here
    }

    //Get true or false if guess Character Coors are within APIcharacter.coors
    const confirmationBoolean = (charX, charY, guessX, guessY) => {
        if((guessX >= charX - 20 && guessX <= charX + 20) && (guessY >= charY - 20 && guessY <= charY + 20)) {
            return true
        }
        else return false
    }

    // Add correct guess x/y coords to found object
    const addFoundWindow = () => {
        setFoundWindows(foundWindows => [...foundWindows, {id: charactersFound, x: props.selectionWindowX, y: props.selectionWindowY}])
    }


    return (
        <div className="picture">
            <div className="selection-window" style={props.targetStatus === true ? {left: props.selectionWindowX - 25, top: props.selectionWindowY - 25, display: "block"} : null}></div>
            <select 
            className="select-menu" 
            style={props.targetStatus === true ? {left: props.selectionWindowX - 45, top: props.selectionWindowY + 30, display: "block"} : null}
            value={selectionGuess}
            onChange={handleChange}
            >
                <option value="select">Which Character?</option>
                <option value="1">Waldo</option>
                <option value="2">Odlaw</option>
                <option value="3">Whitebeard</option>
                <option value="4">Wenda</option>
            </select>
            {foundWindows.map(character => {
                return <WindowBox
                        key={character.id}
                        x={character.x}
                        y={character.y} />
            })}
            <img 
                src={waldo} 
                alt="waldo-image" 
                className="main-image"
                onClick={props.onClick}
            ></img>
        </div>
    )
}

export default Picture