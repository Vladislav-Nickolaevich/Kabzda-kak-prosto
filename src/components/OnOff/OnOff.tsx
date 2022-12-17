import React from 'react';

export type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}
function OnOff(props: OnOffType) {
    const squareOne = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on  ? 'green' : 'white',
        display: 'inline-block'
    }
    const squareTwo = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
        display: 'inline-block'
    }
    const circle = {
        width: '15px',
        height: '15px',
        border: '1px solid black',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on  ? 'green' : 'red'
    }
    return (
        <div>
            <div onClick={() => props.onChange(true)} style={squareOne}>On</div>
            <div onClick={() => props.onChange(false)} style={squareTwo}>Off</div>
            <div style={circle}></div>
        </div>
    )
}

export default OnOff