import React, {useRef, useState} from "react";

export const GetValueOfInputByClicked = () => {
    const newRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    const onShowHandler = () => {
        const actualText = newRef.current as HTMLInputElement
        setValue(actualText.value)
    }

    return (
        <div>
            <input ref={newRef}/>
            <button onClick={onShowHandler}>Show</button>
            <span> value of input : {value}</span>
        </div>
    );
};