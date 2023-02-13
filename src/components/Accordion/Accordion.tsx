import React from 'react';

type ItemsType = {
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onChange: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                onChange={props.onChange}
                title={props.titleValue}
            />
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={props.onChange}>
            {props.title}
        </h1>
    );
}

type AccordionBodyPropsType = {
    items: ItemsType[]
    onClick: (value:any) => void
}
function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul style={{listStyleType:'none'}}>
            {props.items.map(i=> {
                return(
                    <li key={i.value} onClick={() => props.onClick(i.value)}>{i.value}.{i.title}</li>
                );
            })}
        </ul>
    );
}


export default Accordion;