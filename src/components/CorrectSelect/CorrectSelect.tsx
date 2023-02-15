import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './CorrectSelect.module.css'


type ItemsType = {
    value: any
    title: string
}

type CorrectSelectType = {
    value: string
    items: ItemsType[]
    onChange: (value: any) => void
}
export const CorrectSelect = (props: CorrectSelectType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for (let i = 0; i < props.items.length; i++) {
                if(props.items[i].value === hoveredElementValue){
                    let pretendentElement = e.key === 'ArrowDown'?
                        props.items[i + 1]:
                        props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        break;
                    }
                }
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }
    return (
        <div>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span
                    className={styles.main}
                    onClick={toggleItems}
                >
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => {
                            return (
                                <div
                                    onMouseEnter={() => {setHoveredElementValue(i.value)}}
                                    className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                    onClick={() => {
                                        onItemClick(i.value)
                                    }}
                                    key={i.value}
                                >
                                    {i.title}
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

