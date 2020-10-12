import React, { useEffect, useState } from 'react';

const Character = (props) => {
    
    return (
        <div className="character" style={props.found === false ?  null : {textDecoration: "line-through", color: "grey"}}>
            {props.name}
        </div>
    )
}

export default Character