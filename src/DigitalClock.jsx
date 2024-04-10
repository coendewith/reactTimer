import { useState, useEffect } from "react";
import './DigitalClock.css'


function DigitalClock() {
    const [time, setTime] = useState((formatTime(new Date())))

    useEffect(() => {
        const intervalId = setInterval(
            () => { setTime(formatTime(new Date())) }
            , 1000)
        return () => (
            clearInterval(intervalId)
        )
    }
        , [])

    function formatTime(date) {
        const hour = date.getHours() < 10 ? '0' + date.getHours().toString() : date.getHours().toString()
        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds().toString() : date.getSeconds().toString()
        return hour + ':' + minutes + ':' + seconds
    }



    return (
        <>
            <div className="clock-container">
                <div className="clock">
                    <span className="now">Now: </span>
                    <span>{time}</span>
                </div>
            </div>
        </>
    )


}
export default DigitalClock