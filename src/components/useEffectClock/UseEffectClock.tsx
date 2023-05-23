import React, {useEffect, useState} from 'react';

const UseEffectClock = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
      const timerId =  setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timerId)
    }, [])

    const setZeroInTheBeginning = (n: number) =>  n < 10 ? '0' + n: n

    return (
        <div>
            <span>{setZeroInTheBeginning(date.getHours())}</span>
            :
            <span>{setZeroInTheBeginning(date.getMinutes())}</span>
            :
            <span>{setZeroInTheBeginning(date.getSeconds())}</span>
        </div>
    );
};

export default UseEffectClock;