import React, {useEffect, useState} from 'react';

const UseEffectClock = () => {
    let currentDate = new Date()
    const [date, setDate] = useState(currentDate)
    useEffect(() => {
      const timerId =  setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timerId)
    })
    return (
        <div>
            {date.getHours() + ':'}
            {date.getMinutes() + ':'}
            {date.getSeconds()}
        </div>
    );
};

export default UseEffectClock;