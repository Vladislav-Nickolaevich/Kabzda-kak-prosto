import React, {useReducer, useState} from "react";

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'
type UncontrolledAccordionPropsType = {
    titleValue: string;
}
type ActionType = {
    type: string
}
const reducer = (state: boolean, action: ActionType) => {
    switch (action.type){
        case TOGGLE_CONSTANT:
            return !state
        default:
            throw new Error("Wrong action type")
    }
    return state
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, false)
    return (
        <div>
            {/*<AccordionTitle onClick={() => {setCollapsed(!collapsed)}} title={props.titleValue}/>*/}
            <AccordionTitle onClick={() => { dispatch({type: TOGGLE_CONSTANT})}}
                            title={props.titleValue}
            />

            {!collapsed && <AccordionBody/>}
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
