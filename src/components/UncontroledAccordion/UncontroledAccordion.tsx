import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


type UncontrolledAccordionPropsType = {
    titleValue: string;
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            {/*<AccordionTitle onClick={() => {setCollapsed(!collapsed)}} title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => { dispatch({type: TOGGLE_COLLAPSED})}}
                            title={props.titleValue}
            />

            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h1 onClick={() => {
            props.onClick()
        }}>{props.title}</h1>
    );
}

const liStyle = {
    listStyleType: 'none'
}

function AccordionBody() {
    return (
        <ul style={liStyle}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;
