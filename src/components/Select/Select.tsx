import React, {useState} from 'react';


type ItemsType = {
    value: any
    title: string
}
type SelectType = {
    value: any
    items: ItemsType[]
    onClick: (value: any) => void
    onChange: () => void
    collapsed: boolean
}

export const Select = (props:SelectType) => {
    return (
        <div>
            <h3 onClick={props.onChange}>{props.value}</h3>
            {props.collapsed && <BodySelect items={props.items} onClick={props.onClick}/>}
        </div>
    );
};

type BodySelectType = {
    items: ItemsType[]
    onClick: (value: any) => void
}
const BodySelect = (props: BodySelectType) => {
    return (
        <div>
            {props.items.map(i => {
                return (
                    <div onClick={() => props.onClick(i.title)} key={i.value}>{i.title}</div>
                )
            })}
        </div>
    )
}