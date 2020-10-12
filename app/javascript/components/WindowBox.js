import React from 'react'

const WindowBox = (props) => {
    return (
        <div 
        className="successful-window"
        style={{left: props.x - 25, top: props.y - 25}}>
        </div>
    )
}

export default WindowBox