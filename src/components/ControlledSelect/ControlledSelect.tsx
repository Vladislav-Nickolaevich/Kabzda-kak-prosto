import React, {ChangeEvent, useState } from 'react';


export const ControlledSelect = () => {
    const [value, setValue] = useState<undefined | string>(undefined)
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
    return (
        <select value={value} onChange={onChange}>
            <option>None</option>
            <option>Moscow</option>
            <option>Minsk</option>
            <option>Spain</option>
        </select>
    );
};

