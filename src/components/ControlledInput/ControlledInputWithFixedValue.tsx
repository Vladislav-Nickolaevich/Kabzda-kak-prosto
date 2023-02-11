import React from 'react';


type ControlledInputType = {
    value: string
}
export const ControlledInputWithFixedValue = (props:ControlledInputType) => {
    return <input value={props.value}/>
};

