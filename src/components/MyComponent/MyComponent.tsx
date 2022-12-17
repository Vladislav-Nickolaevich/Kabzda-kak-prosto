import React, {useState} from 'react';

const MyComponent = () => {
    let [value, setValue] = useState(0)
    return (
        <div>
            <Star value={1} selected={value >= 1} setV={setValue}/>
            <Star value={2} selected={value >= 2} setV={setValue}/>
            <Star value={3} selected={value >= 3} setV={setValue}/>
            <Star value={4} selected={value >= 4} setV={setValue}/>
            <Star value={5} selected={value >= 5} setV={setValue}/>
        </div>
    );
};

type StarType = {
    value: 1 | 2 | 3 | 4 | 5
    setV: (setValue: 0 | 1 | 2 | 3 | 4 | 5) => void
    selected: boolean
}
const Star = (props:StarType) => {
    return (
        <span onClick={() => {props.setV(props.value)}}>
           {props.selected === true? <b>Star </b>: 'Star '}
        </span>
    )
}

export default MyComponent;