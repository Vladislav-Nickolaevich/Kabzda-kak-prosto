import React from 'react';

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onClick: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                onClick={props.onClick}
                title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1
            onClick={ props.onClick}
        >{props.title}</h1>
    );
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default Accordion;