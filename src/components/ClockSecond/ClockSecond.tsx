import React, {useEffect, useState} from 'react';
import dial from '../../image/dial.png';
import secondHand from '../../image/second.png';
import minuteHand from '../../image/minute.png';
import hourHand from '../../image/hour.png';
import '../ClockSecond/ClockSecond.css'


const ClockSecond = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(function () {
            setDate(new Date());
        }, 1);
        return () => clearInterval(timerId)
    })

    return (
        <div
            className="clock"
            style={{backgroundImage: `url(${dial})`}}
        >
            <div className="clock__type_sec" style={{
                backgroundImage: `url(${secondHand})`,
                transform: `rotate(${0.006 * (+date.getSeconds() * 1000 + +date.getMilliseconds())}deg)`
            }}></div>
            <div className="clock__type_min" style={{
                backgroundImage: `url(${minuteHand})`,
                transform: `rotate(${6 * (+date.getMinutes() + +date.getSeconds() / 60)}deg)`
            }}></div>
            <div className="clock__type_hour" style={{
                backgroundImage: `url(${hourHand})`,
                transform: `rotate(${30 * (+date.getHours() + +date.getMinutes() / 60)}deg)`
            }}></div>
        </div>
    )
}

export default ClockSecond;