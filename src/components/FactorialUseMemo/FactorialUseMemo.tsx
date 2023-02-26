import React, {useState, useMemo} from 'react';

const FactorialUseMemo = () => {
    const [a, setA] = useState<number>(2)
    const [b, setB] = useState<number>(2)
    let resultA = 1
    let resultB = 1

    for (let i = 1; i <= a; i++) {
        resultA *= i
    }
    resultB = useMemo(() => {
        let tempResultB = 1
        for (let i = 1; i <= b; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultB *= i
        }
        return tempResultB
    }, [b])

    return (
        <div>
            <input onChange={(e) => setA(+e.currentTarget.value)}/>
            <input onChange={(e) => setB(+e.currentTarget.value)}/>
            <div>
                Result a: {resultA}
            </div>
            <div>
                Result b: {resultB}
            </div>
        </div>
    );
};

export default FactorialUseMemo;