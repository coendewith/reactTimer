import { useState, useEffect } from "react";
import './Stopwatch.css'

function Stopwatch() {

    const [Timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (isRunning) {
            const intervalId =
                setInterval(
                    () => { setTimer(Timer + 1) }
                    , preciseInterval())
            return () => (
                clearInterval(intervalId)
            )
        }
    },
    )
    function handleStart() {
        setIsRunning(true)

        console.log(isRunning)
    }
    function handlePause() {
        setIsRunning(false)
    }
    function handleReset() {
        setTimer(0)
    }

    let startTime = Date.now();

    function preciseInterval() {
        let currentTime = Date.now();
        let elapsedTime = currentTime - startTime;
        let nextTick = 1000 - (elapsedTime % 1000);
        return nextTick
    }

    function formatTimer(timeobject) {

        let sec = (Math.floor(timeobject) % 60) < 10 ? '0' + (Math.floor(timeobject) % 60) : (Math.floor(timeobject) % 60);
        let min = (Math.floor(timeobject / 60)) < 10 ? '0' + (Math.floor(timeobject / 60)) : (Math.floor(timeobject / 60))
        let hrs = (Math.floor(timeobject / 3600)) < 10 ? '0' + (Math.floor(timeobject / 3600)) : (Math.floor(timeobject / 3600))

        return hrs + ':' + min + ':' + sec
    }

    return (
        <>
            <span className="timer">{formatTimer(Timer)}</span>
            <br />
            <button className="start-button" onClick={() => handleStart()}>Start</button>
            <button className="pause-button" onClick={() => handlePause()}>Pause</button >
            <button className="reset-button" onClick={() => handleReset()} > Reset</button >
        </>
    );
}
export default Stopwatch