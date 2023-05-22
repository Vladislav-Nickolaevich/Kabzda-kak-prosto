import React, {useEffect, useState} from 'react';

const SimpleUseEffect = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('Every render')
        document.title = count.toString()
    })

    useEffect(() => {
        console.log('Only first render')
        document.title = count.toString()
    }, [])

    useEffect(() => {
        console.log('Render first time and other when count changes')
        document.title = count.toString()
    }, [count])
    return (
        <div>
            <div>
                {count + ' '}
                <button onClick={() => setCount(count + 1)}>Count</button>
            </div>
            <div>
                {fake + ' '}
                <button onClick={() => setFake(fake + 1)}>Fake</button>
            </div>
        </div>
    );
};

export default SimpleUseEffect;