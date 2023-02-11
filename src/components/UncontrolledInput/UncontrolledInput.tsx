import React, {ChangeEvent, useState} from 'react';

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input onChange={onChange}/>
            <span> value of input : {value}</span>
        </>
    );
};




