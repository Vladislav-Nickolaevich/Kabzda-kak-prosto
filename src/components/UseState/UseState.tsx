import React, {useState} from 'react';

function generateDate() {
    console.log('init')
    return 1231231
}
const UseState = () => {
    console.log('value')
    // const init = generateDate()
    const [value, setValue] = useState(generateDate)
    return (
        <div>
            <button onClick={() => setValue(value + 1)}>+</button>
            {value}
        </div>
    );
};

export default UseState;