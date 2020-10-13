import React, { useEffect, useState } from 'react';

const Timer = (props) => {
    const[seconds, setSeconds] = useState(0)
    let interval;

    useEffect(() => {
        if(!props.stopGame) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1)
                props.getTime(seconds+1)
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [seconds])

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
      
        const formattedMin = min >= 10 ? `${min}` : `0${min}`;
        const formattedSec = sec >= 10 ? `${sec}` : `0${sec}`;
      
        return `${formattedMin}:${formattedSec}`;
    }


    return (
        <div className="timer">
        {formatTime(seconds)}
        </div>
    )
}

export default Timer